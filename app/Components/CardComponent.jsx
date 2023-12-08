import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
const CardComponent = ({ title, discription, catogory, src, status, time, date }) => {
  return (
    <Card className="w-[350px] m-auto mt-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={"overflow-clip"}>
          {discription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" opacity-50">
          Time: {time}
        </div>
        <div className=" opacity-50">Date: {date}</div>
      </CardContent>
      <CardFooter className="flex justify-between items-start">
        <div className="flex gap-2">
          <Badge className={`${status == "active" ? " bg-rose-500" : status == "Proccessing" ? " bg-yellow-500" : status == "closed" ? " bg-green-800" : ""}`}>{status}</Badge>
          <Badge
            className={` opacity-40${catogory == "electrical"
              ? " bg-indigo-800"
              : catogory == "housekeeping"
                ? " bg-orange-800"
                : catogory == "gardening"
                  ? " bg-amber-600"
                  : catogory == "security"
                    ? " bg-cyan-800"
                    : catogory == "office"
                      ? " bg-blue-800"
                      : catogory == "maintenance"
                        ? " bg-pink-800"
                        : catogory == "other"
                          ? " bg-lime-800"
                          : "bg-black"
              }`}
          >
            {catogory}
          </Badge>
        </div>
        {src && <Image src={src} width="100" alt="img" />}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
