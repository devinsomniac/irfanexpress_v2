import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-blue-950 flex flex-col md:flex-row gap-6 items-center justify-between p-10'>
      <div className='flex justify-center'>
        <Image src={'/logo.png'} alt='Logo' height={50} width={180}/>
      </div>
      <div className='text-white flex flex-col'>
        <p>Enamul Haque Chowdhury</p>
        <p>+8801711325022</p>
        <p>irfansifat@gmail.com</p>
      </div>
      <div >
      <iframe className='border-[2px] border-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.045761518165!2d91.17743136621189!3d23.458813767540747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547fa1572c0a5f%3A0xa912eec058f608fd!2sIrfan%20Express!5e0!3m2!1sen!2sbd!4v1733236835385!5m2!1sen!2sbd" width="300" height="150"  loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default Footer
