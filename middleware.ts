// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const token = request.cookies.get("next-auth.session-token"); // Check for authentication token

  // If token exists, redirect to the profile page (or any other page you'd like)
  if (token && request.nextUrl.pathname === "/auth/signin") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // If the token does not exist, proceed with the current behavior
  if (!token && request.nextUrl.pathname !== "/auth/signin") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

// Define which paths the middleware should apply to (e.g., /auth/signin, /dashboard, /profile)
export const config = {
  matcher: ["/auth/signin", "/dashboard", "/profile"],
};
