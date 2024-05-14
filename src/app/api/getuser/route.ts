import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const GET = (req: NextRequest) => {
    const token = req.cookies.get("token")?.value || null;
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
    return NextResponse.json(decodedToken);
};
