// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const token = request.cookies.get("next-auth.session-token"); // Check for authentication token

  if (!token) {
    // Redirect to the login page if token is not present
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // If the token exists, allow the request to continue
  return NextResponse.next();
}

// Define which paths the middleware should apply to (e.g., /dashboard, /profile)
export const config = {
  matcher: ["/dashboard", "/profile"],
};
