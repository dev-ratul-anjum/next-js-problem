import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const cookieHeader = (await cookies()).toString();

  console.log("cookieHeader : ", cookieHeader);
  return NextResponse.next();
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
