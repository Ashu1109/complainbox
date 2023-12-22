import { connect } from "@/app/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Complain from "@/app/models/Complain";
import { auth } from "@clerk/nextjs";
connect();
export async function GET(req) {
  try {
    const { userId } = auth();
    const activeComplain = await Complain.find({
      userId,
      status: { $ne: "close" },
    }).sort({
      updatedAt: -1,
    });
    return NextResponse.json({ activeComplain }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 200 });
  }
}
