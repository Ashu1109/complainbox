'use client'
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
import Image from 'next/image'
import img from '../assets/Logo.png'
const complains = [
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description:
      "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfsdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjfa,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
  {
    flatno: "Atcr",
    title: ",mf,.s,smg.,sfmg.sf",
    description: "a,mf.s,gnslkenrfglkjs,dmnfgkj,sdmntklg,nmseltkdjf",
    catogery: "plumber",
    status: "active",
    image: img
  },
];
const TableComponent = () => {
  return (
    <Table className="w-[90%]  m-auto">
      <TableCaption>Active Complain</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Flat No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Catogery</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {complains.map((complain, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{complain.flatno}</TableCell>
            <TableCell>{complain.title}</TableCell>
            <Dialog>
              <TableCell>
                {complain.description.substring(0, 100)}
                <DialogTrigger>...readmore</DialogTrigger>
                <DialogContent>
                  <DialogHeader className={"text-slate-500"}>
                    <DialogTitle className="text-black">Flat no: <div className=" text-base text-slate-500 ">{complain.flatno}</div></DialogTitle>
                    <div className=" font-semibold text-black">Title:</div>{complain.title}
                  </DialogHeader>
                  <DialogDescription className={"text-slate-500 flex gap-5 flex-col"}>
                    <div className=" font-semibold text-black">Complain:</div>
                    <div className="w-[300px] break-words">{complain.description}</div>
                    <div>
                      {complain.image && (<Image src={complain.image} width={300} alt="image" />)}
                    </div>
                  </DialogDescription>
                  <DialogFooter className={"text-slate-500 flex justify-center items-center gap-2 "}>
                    <div>
                      {complain.catogery[0].toUpperCase() + complain.catogery.substring(1)}
                    </div>
                    <div>{complain.status[0].toUpperCase() + complain.status.substring(1)}</div>
                    <DialogClose><Button>Close</Button></DialogClose>
                  </DialogFooter>
                </DialogContent>

              </TableCell>
            </Dialog>
            <TableCell>{complain.catogery}</TableCell>
            <TableCell className=" text-center w-full flex justify-center items-center gap-5">
              {complain.status}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Change Status" />
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
    </Table >
  );
};

export default TableComponent;
