import { connect } from "@/dbConfig/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connect();

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();
  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      {
        status: 401,
      }
    );
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      {
        status: 400,
      }
    );
  }
  const token: string = jwt.sign(
    { id: user._id, username, password: user.password },
    `${process.env.JWT_SECRET}`
  );
  const response = NextResponse.json({
    message: "Authentication successful",
  });
  response.cookies.set("token", token);
  return response
};
