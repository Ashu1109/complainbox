import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ProfileCardComponent = ({ name, email }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end pt-10 items-center">
        <Dialog>
          <DialogTrigger className="border inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-background hover:bg-accent hover:text-accent-foreground">
            Change Password
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
              <DialogDescription>
                {
                  "Make changes to your Password here. Click save when you're done."
                }
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Old Password
                </Label>
                <Input id="name" type="password" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  New Password
                </Label>
                <Input id="username" type="password" className="col-span-3" />
              </div>
            </div>
            <DialogClose className="bg-[#cd393e] h-10 px-4 py-2 text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Save changes
            </DialogClose>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileCardComponent;
