"use client";
import React, { useEffect, useState } from "react";
import BottomNavbar from "../../Components/BottomNavbar";
import { UserProfile } from "@clerk/nextjs";
const Page = () => {
  return (
    <div>
      <div className="mb-14">
        <UserProfile />
      </div>
      <div className="w-full flex justify-center">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page;
