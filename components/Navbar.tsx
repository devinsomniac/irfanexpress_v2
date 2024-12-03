import React from 'react';
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
import { FcGoogle } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();
  return (
    <div className='p-2 flex justify-between items-center bg-blue-50'>
      <div>
      <Link href={'/'}>
        <Image src={"/logo.png"} alt='logo' height={100} width={100} />
        </Link>
      </div>
      <div className='justify-between items-center  hidden md:flex'>
        <ul className='flex gap-4 justify-center items-center text-lg'>
          <Link href={'/'}>
          <li>Home</li>
          </Link>
          <Link href={'/Appointment'}>
          <li>Appointment</li>
          </Link>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        {session && session?.user ? (

          <div className='flex gap-2'>
            <Link href={`/Profile/${session?.user?.id}`}>
              <div >
                <Image src={session?.user?.image as string} alt='Profile' height={40} width={40} className='rounded-full border-[2px] border-white' />
              </div>
            </Link>

            <form action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}>
              <Button type='submit' className='bg-white rounded-full border-[2px] hover:bg-white text-black'>
                <IoIosLogOut />

              </Button>
            </form>

          </div>

        ) : (
          <form action={async () => {
            "use server";
            await signIn("google");
          }}>
            <Button type='submit' className='bg-white rounded-full border-[2px] hover:bg-white hidden md:block'>
              <FcGoogle />
            </Button>
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
            <DropdownMenuItem>

              {session && session?.user ? (
                <form action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}>
                  <Button type='submit' className='bg-white rounded-full border-[2px] hover:bg-white text-black'>
                    <IoIosLogOut />

                  </Button>
                </form>
              ) : (
                <form action={async () => {
                  "use server";
                  await signIn("google");
                }}>
                  <Button type='submit' className='bg-white rounded-full border-[2px] hover:bg-white'>
                    <FcGoogle />
                  </Button>
                </form>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
