import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const session = await auth();
  return (
    <div className='p-2 flex justify-between items-center'>
      <Image src={"/logo.png"} alt='logo' height={100} width={100} />
      <div className='justify-between items-center w-full hidden md:flex'>
        <ul className='flex gap-4 ml-[400px]'>
          <li>Home</li>
          <li>Appointment</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        {session ? (
          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <Button type='submit'>Log Out</Button>
          </form>
        ) : (
          <form action={async () => {
            "use server";
            await signIn("google");
          }}>
            <Button type='submit'>Log In</Button>
          </form>
        )}
      </div>
      <div className='md:hidden mr-5'>
        <DropdownMenu>
          <DropdownMenuTrigger><GiHamburgerMenu /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Home</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Appointment</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Log In</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
