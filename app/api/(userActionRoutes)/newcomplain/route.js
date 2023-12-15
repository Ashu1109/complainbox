import { connect } from "@/app/dbconfig/dbconfig";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import getDataUri from "@/app/helper/dataUri";
import cloudinary from "cloudinary";
import Complain from "@/app/models/Complain";
import multer from "multer";
connect();
export async function POST(req) {
  try {
    console.log(req.body);
    // const storage = multer.memoryStorage();
    // const multerUpload = multer({ storage });
    // const multerFiles = multerUpload.any();
    // console.log(req.body());
    // const file = req.file;
    // const token = cookies().has("token");
    // if (!token) {
    //   return NextResponse.json(
    //     { message: "Login Please", success: false },
    //     { status: 401 }
    //   ).redirected("/login");
    // }
    // if (!title || !complain || !catogories) {
    //   return NextResponse.json(
    //     { message: "Enter All Field", success: false },
    //     { status: 403 }
    //   );
    // }
    // let mycloud;
    // if (file) {
    //   const fileuri = getDataUri(file);
    //   mycloud = await cloudinary.v2.uploader.upload(fileuri.content);
    // }
    // const newComplain = new Complain({
    //   title,
    //   complain,
    //   catogories,
    //   image: {
    //     public_id: mycloud?.public_id,
    //     url: mycloud?.secure_url,
    //   },
    // });
    // const savedComplain = await newComplain.save();
    return NextResponse.json(
      { message: "Complain Send", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
