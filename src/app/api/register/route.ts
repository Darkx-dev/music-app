import { connect } from "@/dbConfig/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connect();

export const POST = async (req: NextRequest) => {
  const { username, password, email } = await req.json();
  const user = await User.findOne({ username });
  // Check if user is already existing in the database
  if (user) {
    return NextResponse.json({
      message: "User already exists",
    });
  }
  // Encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Generate a new user
  const newUser = await User.create({
    username,
    password: hashedPassword,
    email,
  });
  // Response
  const response = NextResponse.json({
    message: "User Created",
    user: newUser,
  });
  // Generate a token and set in cookies
  const token: string = jwt.sign(
    { id: newUser._id, username, password: hashedPassword, email },
    `${process.env.JWT_SECRET}`
  );
  response.cookies.set("token", token);
  return response;
};
