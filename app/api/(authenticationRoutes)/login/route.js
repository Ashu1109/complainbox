import { generateToken } from "@/app/helper/generateToken";
import User from "@/app/models/User";
import bcrypt from "bcrypt";
import { connect } from "@/app/dbconfig/dbconfig";
import { NextResponse } from "next/server";
connect();
export async function POST(req) {
  try {
    const { email, phno, password } = await req.json();
    if ((!phno && !password) || (!email && !password))
      return NextResponse.json(
        { message: "Enter All Field", success: false },
        { status: 403 }
      );
    let user = await User.findOne({ $or: [{ email }, { phno }] });
    if (!user)
      return NextResponse.json(
        { message: "User Doesn't Exist", success: false },
        { status: 400 }
      );
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return NextResponse.json(
        { message: "Invalid Input", success: false },
        { status: 400 }
      );

    const token = generateToken(user);
    const res = NextResponse.json(
      { message: "Login Successful", success: true },
      { status: 200 }
    );
    res.cookies.set("token", token);
    return res;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
