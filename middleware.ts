import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (token && request.nextUrl.pathname === "/auth/signin") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (!token && request.nextUrl.pathname !== "/auth/signin") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/signin", "/dashboard", "/profile"],
};
