import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt"; // Correct import for JWT

// Define custom types for `JWT` and `Session`
interface MyUser {
  id: string;
  username: string;
  email: string;
}

interface MyToken extends JWT {
  id?: string;
  username?: string;
  email?: string;
}

interface MySession extends Session {
  user: {
    id?: string;
    username?: string;
    email?: string;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "ID", type: "text" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials, "test sign");

        const res = await fetch(`http://localhost:3000/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user.success) {
          return {
            id: user.user.id,
            username: user.user.username,
            email: user.user.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    // Type the jwt callback with `MyToken` and `MyUser`
    async jwt({ token, user }: { token: MyToken; user?: MyUser }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
    // Type the session callback with `MySession` and `MyToken`
    async session({ session, token }: { session: MySession; token: MyToken }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
