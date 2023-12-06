'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import Link from "next/link";
const page = () => {
    return (
        <div className=' flex flex-col justify-center'>
            <div className='w-full px-10 '>
                <div className='text-3xl tracking-wide font-bold font-serif'>
                    Welcome
                </div>
                <div className=' text-md px-1'>
                    Register to continue
                </div>
            </div>
            <div className='w-[80%] mt-10  flex gap-9 flex-col m-auto'>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" className='p-5 text-lg bg-slate-200 focus:bg-white' placeholder='Name' />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" className='p-5 text-lg bg-slate-200 focus:bg-white ' placeholder='Email' />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" className='p-5 text-lg bg-slate-200 focus:bg-white  ' placeholder='Password' />
                </div>
            </div>
            <Button className='w-[80%] m-auto mt-10 shadow-lg bg-[#DC3E42] text-stone-200 text-lg font-bold tracking-wide' variant='primary' size='lg'>Register</Button>
            <div className='flex justify-center m-10'>
                Already have an account? <Link href="/login" className='text-[#DC3E42] px-1'>Login</Link>
            </div>
        </div>
    )
}

export default page