import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='p-2 flex justify-between items-center'>
        <Image src={"/logo.png"} alt='logo' height={100} width={100}/>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>Appointment</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Button>Log In</Button>
    </div>
  )
}

export default Navbar