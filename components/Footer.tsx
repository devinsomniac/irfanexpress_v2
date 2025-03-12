import React from 'react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-white border-t-2 shadow-black grid grid-cols-1 md:grid-cols-3 py-4 px-4'>
      <div className='flex justify-center'>
        <Image src={'/logo.png'} alt='Logo' height={50} width={250} />
      </div>
      <div className='text-black flex flex-col gap-2 items-center justify-center'>
        <div className='flex justify-center items-center gap-2'>
        <a href="https://www.facebook.com/enamulhaque.chowdhury.338">
          <FaFacebook className='text-3xl' />
        </a>
        <a href="https://wa.me/8801711325022">
          <IoLogoWhatsapp className='text-3xl' />
        </a>
        <a href="mailto:irfansifat@gmail.com">
          <MdEmail className='text-4xl' />
        </a>
        <a href="tel:+880171325022">
          <FaPhoneAlt className='text-2xl' />
        </a>
        </div>
        <Link href={'/Contact'}>
        <Button variant={'outline'} className='border border-black rounded-full h-12 text-2xl font-light'>Contact Us</Button>
        </Link>
      </div>
      <div>
        <iframe
          className='border-[2px] border-black rounded-lg'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.045761518165!2d91.17743136621189!3d23.458813767540747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547fa1572c0a5f%3A0xa912eec058f608fd!2sIrfan%20Express!5e0!3m2!1sen!2sbd!4v1733236835385!5m2!1sen!2sbd"
          width="300"
          height="150"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;