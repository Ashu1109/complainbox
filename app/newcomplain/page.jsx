'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { FaLocationArrow, FaShare } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import BottomNavbar from "../Components/BottomNavbar";

const frameworks = [
  {
    value: "electrical",
    label: "Electrical",
  },
  {
    value: "plumber",
    label: "Plumber",
  },
  {
    value: "housekeeping",
    label: "Housekeeping",
  },
  {
    value: "gardening",
    label: "Gardening",
  },
  {
    value: "security",
    label: "Security",
  },
  {
    value: "office",
    label: "Office",
  },
  {
    value: "maintenance",
    label: "Maintenance",
  },
  {
    value: "other",
    label: "Other",
  },
];

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className=" flex justify-center mb-20  gap-5  m-auto flex-col w-[90%]">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-md px-1" htmlFor="title">
          Title :
        </Label>
        <Input
          type="text"
          id="title"
          className="p-5 text-lg shadow-md bg-slate-200 focus:bg-white  "
          placeholder="Title"
        />
      </div>
      <div>
        <Label className="px-1 font-semibold text-md">Catogories :</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] shadow-md p-6 text-sm font-semibold tracking-wide justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select Catogories..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Catogory..." />
              <CommandEmpty>No Catogory found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="px-1 font-semibold text-md">Complain :</Label>
        <Textarea
          className="text-lg shadow-xl focus:bg-white bg-slate-200"
          placeholder="Write Your Complain Here..."
        />
      </div>
      <div className="flex justify-between">
        <div>
          <Button
            className="w-[200px] shadow-xl p-6 font-semibold tracking-wide justify-center bg-[#cd393e] text-lg text-white gap-2"
            variant="solid"
          >
            <div>Send</div>
            <div>
              <FaLocationArrow color="white" />
            </div>
          </Button>
        </div>
        <div className="flex gap-3">
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="w-[60px] shadow-xl flex justify-center items-center h-[50px]  bg-slate-200  text-lg font-semibold tracking-wide">
                <BiSolidImageAdd size={30} />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>Upload An Image</AlertDialogHeader>
              <AlertDialogDescription>
                <Input type="file" />
              </AlertDialogDescription>
              <AlertDialogFooter
                className={"flex flex-row justify-between items-end gap-4"}
              >
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-[#DC3E42]">
                  Uplaod
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div
            className="w-[60px] flex justify-center items-center shadow-xl h-[50px] bg-slate-200  text-lg font-semibold tracking-wide"
            variant="solid"
          >
            <FaShare size={20} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center shadow-lg">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Page