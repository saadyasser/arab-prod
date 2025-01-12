import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    username: "testuser",
    email: "testuser@example.com",
    password: "password123",
  },
  {
    id: 2,
    username: "anotheruser",
    email: "anotheruser@example.com",
    password: "password456",
  },
];

const generateToken = (user) => {
  const payload = { id: user.id, username: user.username };
  const secret = "your-secret-key";
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      const token = generateToken(user);

      return new Response(
        JSON.stringify({
          success: true,
          user: { id: user.id, username: user.username, email: user.email },
          token,
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid credentials" }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
