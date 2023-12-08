'use client'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Link from 'next/link'
const page = () => {
    return (
      <div className="flex min-h-[83vh] items-center flex-col gap-10">
        <div className="w-full px-10 ">
          <div className="text-3xl tracking-wide  font-medium  font-sans">
            Hello There
          </div>
          <div className=" text-2xl px-1 text-slate-700 font-serif">
            Welcome
          </div>
        </div>
        <div className="bg-slate-200 w-[90%] rounded-lg py-20 flex flex-col justify-center items-center px-10">
          <Button
            className="w-[90%] m-auto shadow-lg bg-[#cd393e] text-stone-200 text-lg font-bold tracking-wide"
            variant="primary"
            size="lg"
          >
            <Link href={"/newcomplain"}>New Complain</Link>
          </Button>
          <Button
            className="w-[90%] m-auto mt-10 shadow-lg bg-[#cd393e] text-stone-200 text-lg font-bold tracking-wide"
            variant="primary"
            size="lg"
          >
            <Link href={"/activecomplain"}>Active Complain</Link>
          </Button>
          <Button
            className="w-[90%] m-auto mt-10 mb-4 shadow-lg bg-[#cd393e] text-stone-200 text-lg font-bold tracking-wide"
            variant="primary"
            size="lg"
          >
            <Link href={"/allcomplain"}>All Complain</Link>
          </Button>
          <Separator className="my-4 bg-slate-500" />
          <Button
            className="w-[90%] m-auto mt-6 shadow-lg bg-[#cd393e] text-stone-200 text-lg font-bold tracking-wide"
            variant="primary"
            size="lg"
          >
            Logout
          </Button>
        </div>
      </div>
    );
};

export default page;
