import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const adminToken = request.cookies.get("admintoken")?.value || null;
    console.log(adminToken);
    return NextResponse.json({ adminToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, success: false }, { status: 200 });
  }
}
