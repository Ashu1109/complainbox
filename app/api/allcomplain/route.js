import { NextResponse } from "next/server";
import Complain from "@/app/models/Complain";
import { connect } from "@/app/dbconfig/dbconfig";
import { auth } from "@clerk/nextjs";
connect();
export async function GET(req) {
  try {
    const { userId } = auth();
    const allComplain = await Complain.find({ userId }).sort({
      updatedAt: -1,
    });
    return NextResponse.json({ allComplain }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 200 });
  }
}
