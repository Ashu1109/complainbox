import { connect } from "@/app/dbconfig/dbconfig";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
connect();
export async function GET() {
  try {
    const alluser = await User.find().sort({ createdAt: -1 });
    return NextResponse.json({ alluser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 200 });
  }
}
