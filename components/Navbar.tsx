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


const Navbar = async () => {
  const session = await auth()
  return (
    <div className='p-2 flex justify-between items-center'>
      <div>
        <Image src={'/logo.png'} alt='logo' height={100} width={100} />
      </div>
      <div className='hidden md:block'>
        <ul className=' flex justify-center items-start gap-3 text-black font-medium'>
          <li>Home</li>
          <li>About</li>
          {session && (
            <>
            <li>Profile</li>
            <li>Itineraries</li>
            </>
          )}
          <li>Umrah</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
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
              className="border rounded-full border-black"
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
            <DropdownMenuItem>Itineraries</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuItem>Umrah</DropdownMenuItem>
            <DropdownMenuItem>Blogs</DropdownMenuItem>
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