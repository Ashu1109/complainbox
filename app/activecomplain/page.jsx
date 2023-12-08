"use client";
import React, { useState } from "react";
import BottomNavbar from "../Components/BottomNavbar";
import Card from "../Components/CardComponent";
import img from "@/app/assets/Logo.png";
import Loader from "../Loader";
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
  return loading ? (
    <Loader />
  ) : (
    <div className="mb-24">
      <div className="px-10 text-xl font-semibold text-slate-500">
        Active Complain
      </div>
      <div>
        {allComplain.map((complain, index) => {
          return (
            <Card
              key={index}
              title={complain.title}
              discription={complain.discription}
              catogory={complain.catogory}
              src={complain.image}
              status={complain.status}
              date={"13/43/20"}
              time={"17:24"}
            />
          );
        })}
      </div>
      <div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page;
