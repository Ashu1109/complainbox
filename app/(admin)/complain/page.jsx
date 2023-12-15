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
const complains = [
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description:
      "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description:
      "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "processing",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "close",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img,
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
  },
];
const Page = () => {
  return (
    <Table className="w-[90%]  m-auto">
      <TableCaption>Active Complain</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S No.</TableHead>
          <TableHead>Flat No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Complain</TableHead>
          <TableHead>View Detail</TableHead>
          <TableHead>Catogery</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {complains.map((complain, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{complain.flatno}</TableCell>
            <TableCell>{complain.title}</TableCell>
            <TableCell>
              {complain.description.substring(0, 100)}
              ...readmore
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
                        {complain.flatno}
                      </div>
                    </DialogTitle>
                    <div className=" font-semibold text-black">Title:</div>
                    {complain.title}
                  </DialogHeader>
                  <DialogDescription
                    className={"text-slate-500 flex gap-5 flex-col"}
                  >
                    <div className=" font-semibold text-black">Complain:</div>
                    <div className="w-[300px] break-words">
                      {complain.description}
                    </div>
                    <div className="flex justify-center">
                      {complain.image && (
                        <Image src={complain.image} width={300} alt="image" />
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
                        {complain.catogery[0].toUpperCase() +
                          complain.catogery.substring(1)}
                      </div>
                      <div>
                        {complain.status[0].toUpperCase() +
                          complain.status.substring(1)}
                      </div>
                    </div>
                    <DialogClose>
                      <Button>Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </TableCell>
            </Dialog>
            <TableCell>{complain.catogery}</TableCell>
            <TableCell className=" text-center w-full flex justify-center items-center gap-5">
              <Select value={complain.status}>
                <SelectTrigger>
                  <SelectValue placeholder={complain.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="w-[200px]">
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="close">Close</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
