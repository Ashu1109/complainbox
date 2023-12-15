"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "@/app/assets/Logo.png";
const users = [
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    image: img,
    totalcomplain: 30,
    activecomplain: 20,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    phno: "9090909090",
    catogery: "plumber",
    status: "active",
    totalcomplain: 30,
    activecomplain: 20,
  },
];
const Page = () => {
  return (
    <Table className="w-[90%]  m-auto">
      <TableCaption>Active user</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S No.</TableHead>
          <TableHead>Flat No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone No.</TableHead>
          <TableHead>Total Complain</TableHead>
          <TableHead>Active Complain</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Profile</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{user.flatno}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.phno}</TableCell>

            <TableCell>{user.totalcomplain}</TableCell>

            <TableCell>{user.activecomplain}</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Change Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <Dialog>
              <TableCell>
                <DialogTrigger>
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50">
                    Detail
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className={"text-slate-500 text-left"}>
                    <DialogTitle className="text-black">
                      Flat no:{" "}
                      <div className=" text-base text-slate-500 ">
                        {user.flatno}
                      </div>
                    </DialogTitle>
                    <div className=" font-semibold text-black">Title:</div>
                    {user.title}
                  </DialogHeader>
                  <DialogDescription
                    className={"text-slate-500 flex gap-5 flex-col"}
                  >
                    <div className=" font-semibold text-black">user:</div>
                    <div className="w-[300px] break-words">
                      {user.description}
                    </div>
                    <div className="flex justify-center">
                      {user.image && (
                        <Image src={user.image} width={300} alt="image" />
                      )}
                    </div>
                  </DialogDescription>
                  <DialogFooter
                    className={
                      "text-slate-500 flex flex-col justify-center items-center gap-2 "
                    }
                  >
                    <div className="flex gap-2 p-4">
                      <div>
                        {user.catogery[0].toUpperCase() +
                          user.catogery.substring(1)}
                      </div>
                      <div>
                        {user.status[0].toUpperCase() +
                          user.status.substring(1)}
                      </div>
                    </div>
                    <DialogClose>
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </TableCell>
            </Dialog>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
