import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { auth, signIn ,signOut} from '@/auth'
import { MdLogout } from "react-icons/md";

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
            <li>Itineraries</li>
          )}
          <li>Umrah</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className='hidden md:block'>
        {session && session.user?.name ? (
          <div className='flex justify-center items-center gap-2'>
            <span className="text-black font-medium">
              Welcome, {session.user.name}
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
    </div>
  )
}

export default Navbar