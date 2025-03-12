import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { auth, signIn, signOut } from '@/auth'
import { MdLogout } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";




const Navbar = async () => {
  const session = await auth()
  return (
    <div className='p-2 flex justify-between items-center'>
      <div>
        <Link href={'/'}>
        <Image src={'/logo.png'} alt='logo' height={100} width={100} />
        </Link>
        
      </div>
      <div className='hidden md:block'>
        <div className=' flex justify-center items-start gap-3 text-gray-800 font-medium'>
          <div className='flex justify-center items-center'>
            <CiHome className='mb-1 text-orange-600'/>
            <Link href={'/'}>Home</Link> 
          </div>
          <div className='flex justify-center items-center '>
            <IoIosInformationCircleOutline className='text-xl mb-1 text-orange-600'/>
            <Link href={'/About'}>About</Link>
            </div>
          {session && (
            <>
            <div className='flex justify-center items-center '>
              <FaRegUser className='mb-1 text-orange-600'/>
              <Link href={`/Profile/${session?.user?.id}`}>Profile</Link> 
              </div>
            </>
          )}
          <div className='flex justify-center items-center'>
            <FaRegMoon className='mb-1 text-orange-600'/>
            <Link href={'/Umrah'}>Umrah</Link>
            </div>
          <div className='flex justify-center items-center'>
            <IoCallOutline className='mb-1 text-lg text-orange-600'/>
            <Link href={'/Contact'}>Contact Us</Link>
            </div>
          {/* <li><Link href={'/Blog'} aria-disabled >Blogs</Link></li> */}
        </div>
      </div>
      <div className='hidden md:block'>
        {session && session.user?.name ? (
          <div className='flex justify-center items-center gap-2'>
            <span className="text-black font-medium flex justify-center items-center gap-2">
              Welcome, {session.user.name}
              <Image src={session?.user?.image as string} alt='user Logo' height={50} width={50} className='border-2 border-gray-700 rounded-full' />
            </span>
            <form action={async () => {
              "use server"
              await signOut({ redirectTo: "/" })
            }}>
              <Button variant={'outline'} className='rounded-full border border-black'>
                <MdLogout />
              </Button>
            </form>
          </div>

        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button
              type="submit"
              variant={'outline'}
              className="rounded-full bg-orange-500 hover:bg-orange-600"
            >
              Log In
            </Button>
          </form>
        )}

      </div>
      <div className='block md:hidden'>
        {session && session?.user?.name ? (
          <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={session?.user?.image as string} alt='user Logo' height={50} width={50} className='border-2 border-gray-700 rounded-full' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-5 text-black font-medium'>
            <DropdownMenuLabel>Welcome, {session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuItem>Umrah</DropdownMenuItem>
            {/* <DropdownMenuItem>Blogs</DropdownMenuItem> */}
            <DropdownMenuItem>
            <form action={async () => {
              "use server"
              await signOut({ redirectTo: "/" })
            }} className='w-full'>
              <Button variant={'outline'} className='rounded-full border border-black w-full'>
                <MdLogout />
              </Button>
            </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        ):
        (
<DropdownMenu>
          <DropdownMenuTrigger>
          <GiHamburgerMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-5 text-black font-medium'>
            <DropdownMenuLabel>Welcome</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button
              type="submit"
              variant={'outline'}
              className="border rounded-full border-black"
            >
              Log In
            </Button>
          </form>
            </DropdownMenuItem>
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuItem>Umrah</DropdownMenuItem>
            <DropdownMenuItem>Blogs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        )}
        
      </div>
    </div>
  )
}

export default Navbar