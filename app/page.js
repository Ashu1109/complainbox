"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loader from "@/app/Loader";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import BottomNavbar from "@/app/Components/BottomNavbar";
const Page = () => {
  const [loading, setLoading] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const logout = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/logout");
      const data = await res.data;
      setLoading(false);
      if (data.success) {
        toast({
          variant: "default",
          title: data.message,
        });
        router.push("/login");
      }
      if (!data.success) {
        toast({
          variant: "destructive",
          title: data.message,
        });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleLoad = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/admintoken");
      const data = await res.data;
      if (data.adminToken == "admin") {
        setIsAdmin(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="flex min-h-[83vh] items-center flex-col gap-10">
      <div className="w-full px-10  flex gap-8 ">
        <div>
          <div className="text-3xl tracking-wide  font-medium  font-sans">
            Hello Resident
          </div>
          <div className="text-2xl text-slate-700 tracking-wide  font-medium  font-sans">
            Ashiana Suncity
          </div>
          <div className=" text-2xl px-1 text-slate-700 font-serif">
            Welcome in our Complain box
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-[90%] rounded-lg pb-16 flex flex-col justify-center items-center px-10">
        <div className="w-full pt-9 justify-end flex">
          <UserButton showName afterSignOutUrl="/sign-in" />
        </div>
        <Separator className="my-4 bg-slate-500" />
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
      </div>
      <div className="w-full flex justify-center">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page;
