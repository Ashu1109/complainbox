import { NextResponse } from "next/server";
import Complain from "@/app/models/Complain";
import { connect } from "@/app/dbconfig/dbconfig";
import { auth } from "@clerk/nextjs";
connect();
export async function POST(req) {
  try {
    const { title, complain, category, uploadedImageData } = await req.json();
    if (!title || !complain || !category)
      return NextResponse.json(
        { message: "Enter All Field", success: false },
        { status: 200 }
      );
    const { userId } = auth();
    if (!userId) {
      NextResponse.json(
        { message: "User Not SignIn", success: false },
        { status: 200 }
      );
    }
    const newComplain = new Complain({
      userId: userId,
      complain,
      title,
      category,
      image: {
        public_id: uploadedImageData.public_id || null,
        url: uploadedImageData.secure_url || null,
      },
    });

    const savedComplain = await newComplain.save();
    return NextResponse.json(
      {
        message: "Complain Send To Maintenance Office",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 500 });
  }
}
