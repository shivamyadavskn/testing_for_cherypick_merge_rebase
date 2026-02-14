import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname === "/auth/login") {
    console.log("Login route detected");
  }

  return NextResponse.next(); // Always return something!
}

export const config = {
  matcher: [],
};
