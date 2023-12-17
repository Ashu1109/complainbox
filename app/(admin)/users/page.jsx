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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/app/Loader";
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { toast } = useToast();
  const handleChange = async (e, id) => {
    try {
      setLoading(true);
      const res = await axios.put("/api/adminupdaterole", { e, id });
      const data = await res.data;
      setLoading(false);
      handleLoad();
      if (data.success) {
        toast({
          variant: "default",
          title: data.message,
        });
      }
      if (!data.success) {
        toast({
          variant: "destructive",
          title: data.message,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLoad = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/adminallusers");
      const data = await res.data;
      setUsers(data.alluser);
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
    <>
      <div className="w-[50vw] mb-9 ml-5">
        <Button
          className="w-[90%] m-auto shadow-lg bg-[#cd393e] text-stone-200 text-lg font-bold tracking-wide"
          variant="primary"
          size="lg"
        >
          <Link href={"/complain"}>All Complain</Link>
        </Button>
      </div>
      <Table className="w-[90%]  m-auto">
        <TableCaption>Active user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S No.</TableHead>
            <TableHead>Flat No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{user.flatno}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phno}</TableCell>
                <TableCell>
                  <Select
                    disabled={loading}
                    onValueChange={(e) => {
                      handleChange(e, user._id);
                    }}
                    value={user.role}
                  >
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
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
