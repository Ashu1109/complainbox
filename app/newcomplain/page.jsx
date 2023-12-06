'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from '@/components/ui/textarea';
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
]

const Page = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
  return (
    <div className=' flex justify-center  gap-5  m-auto flex-col w-[90%]'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-md px-1" htmlFor="title">Title{ " "}:</Label>
        <Input
          type="text"
          id="title"
                  className="p-5 text-lg shadow-md bg-slate-200 focus:bg-white  "
                  placeholder="Title"
        />
          </div>
          <div>
              <Label className='px-1 font-semibold text-md'>Catogories{" "}:</Label>
              <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                      <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-[200px] shadow-lg p-6 text-sm font-semibold tracking-wide justify-between"
                      >
                          {value
                              ? frameworks.find((framework) => framework.value === value)?.label
                              : "Select Catogories..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                      <Command>
                          <CommandInput placeholder="Search framework..." />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                              {frameworks.map((framework) => (
                                  <CommandItem
                                      key={framework.value}
                                      value={framework.value}
                                      onSelect={(currentValue) => {
                                          setValue(currentValue === value ? "" : currentValue)
                                          setOpen(false)
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
          <div className='flex flex-col gap-1'>
              <Label className='px-1 font-semibold text-md'>Complain{" "}:</Label>
              <Textarea className='text-lg shadow-xl focus:bg-white bg-slate-200' placeholder="Write Your Complain Here..." />
          </div>
          <div className='flex justify-between'>
              <div>
                  <Button className='w-[200px] shadow-xl p-6 font-semibold tracking-wide justify-center bg-[#cd393e] text-lg text-white gap-2' variant="solid"><div>Send</div><div><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></Button>
              </div>
              <div className='flex gap-3'>
                  <Button className='w-[60px] shadow-xl h-[50px] justify-center bg-slate-200  text-lg font-semibold tracking-wide' variant="solid"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 5.00006C3.22386 5.00006 3 5.22392 3 5.50006L3 11.5001C3 11.7762 3.22386 12.0001 3.5 12.0001L11.5 12.0001C11.7761 12.0001 12 11.7762 12 11.5001L12 5.50006C12 5.22392 11.7761 5.00006 11.5 5.00006L10.25 5.00006C9.97386 5.00006 9.75 4.7762 9.75 4.50006C9.75 4.22392 9.97386 4.00006 10.25 4.00006L11.5 4.00006C12.3284 4.00006 13 4.67163 13 5.50006L13 11.5001C13 12.3285 12.3284 13.0001 11.5 13.0001L3.5 13.0001C2.67157 13.0001 2 12.3285 2 11.5001L2 5.50006C2 4.67163 2.67157 4.00006 3.5 4.00006L4.75 4.00006C5.02614 4.00006 5.25 4.22392 5.25 4.50006C5.25 4.7762 5.02614 5.00006 4.75 5.00006L3.5 5.00006ZM7 1.6364L5.5682 3.0682C5.39246 3.24393 5.10754 3.24393 4.9318 3.0682C4.75607 2.89246 4.75607 2.60754 4.9318 2.4318L7.1818 0.181802C7.26619 0.09741 7.38065 0.049999 7.5 0.049999C7.61935 0.049999 7.73381 0.09741 7.8182 0.181802L10.0682 2.4318C10.2439 2.60754 10.2439 2.89246 10.0682 3.0682C9.89246 3.24393 9.60754 3.24393 9.4318 3.0682L8 1.6364L8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5L7 1.6364Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
                  <Button className='w-[60px] shadow-xl h-[50px] justify-center bg-slate-200  text-lg font-semibold tracking-wide' variant="solid"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
              </div>
          </div>
    </div>
  );
}

export default Page