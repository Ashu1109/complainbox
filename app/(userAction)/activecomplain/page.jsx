"use client";
import React, { useEffect, useState } from "react";
import BottomNavbar from "../../Components/BottomNavbar";
import Card from "../../Components/CardComponent";
import img from "@/app/assets/Logo.png";
import Loader from "../../Loader";
import axios from "axios";
const allComplain = [
  {
    title: "HElllo",
    discription:
      "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.fs.kf;ksmfksr.,mflkrs.,mflksr,.mflker.dsmngflkfdv.mnfg lkrmsfnxlkm",
    catogory: "electrical",
    image: img,
    status: "active",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "housekeeping",
    image: img,
    status: "Proccessing",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "gardening",
    status: "closed",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "security",
    status: "Proccessing",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "office",
    status: "closed",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "maintenance",
    status: "active",
  },
  {
    title: "HElllo",
    discription: "lskfnglksf.ng sk;rfg,.ms lk.fnv lks.fxmng vlkrsm.f",
    catogory: "other",
    status: "active",
  },
];
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [activeComplain, setActiveComplain] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/activecomplain")
      .then((res) => res.data)
      .then((data) => {
        setActiveComplain(data.activeComplain);
      });
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="mb-24 w-full">
      <div className="px-10 text-xl font-semibold text-slate-500">
        Active Complain
      </div>
      <div className="w-[99%] m-auto flex flex-wrap ">
        {activeComplain && activeComplain.length == 0 ? (
          <div className="min-h-[70vh] w-full flex  justify-center items-center">
            <div className="text-lg font-semibold">No Active Complain</div>
          </div>
        ) : (
          activeComplain &&
          activeComplain.map((complain, index) => {
            return (
              <Card
                key={index}
                title={complain.title}
                discription={complain.discription}
                catogory={complain.category}
                src={complain.image.url}
                status={complain.status}
                date={complain.updatedAt.split("T")[0]}
                time={complain.updatedAt.split("T")[1].split(".")[0]}
              />
            );
          })
        )}
      </div>
      <div className="w-full flex justify-center">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page;
