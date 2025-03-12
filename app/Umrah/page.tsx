import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="p-10">
        <div className="rounded-3xl shadow-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-medium text-3xl md:text-6xl text-center p-6">
              <span className="text-blue-600">Irfan</span>
              <span className="text-orange-600">Express</span>
            </h1>
            <Separator className="w-[180px] bg-orange-600 h-[6px] rounded-full my-2" />
          </div>
          <div className="p-4 flex flex-col justify-start items-start">
            <h1 className="font-medium text-4xl text-left">Hajj/Umrah</h1>
            <Separator className="w-[180px] bg-orange-600 h-[6px] rounded-full my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-2">
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  With over a decade of expertise, Irfan Express stands as a reliable travel agency, specializing in Hajj and Umrah pilgrimages to ensure a spiritually rewarding journey for every traveler.
                </p>
                <p>
                  We offer meticulously curated Umrah packages that cover everything from flights to comfortable accommodations near the holy sites of Mecca and Medina, along with dedicated support throughout your pilgrimage.
                </p>
                <p>
                  Whether you’re embarking on your first Umrah or planning a comprehensive Hajj trip, our experienced team focuses on every detail to meet your spiritual requirements, including biometric services for Hajj and Umrah visa processing.
                </p>
                <p>
                  At Irfan Express, we aim to make your sacred journey seamless and meaningful, offering budget-friendly options tailored to your preferences.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={'/saudivisa.png'}
                alt="Saudi Visa"
                height={300}
                width={700}
                className="object-cover overflow-hidden rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-2">
            <div className="flex justify-center items-center">
              <Image
                src={'/About2.jpg'}
                alt="About Image"
                height={300}
                width={700}
                className="object-cover overflow-hidden rounded-xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  Our Hajj and Umrah packages are designed with care, providing flights, hotel bookings close to the Haram, and reliable transportation to ensure ease while visiting sacred sites.
                </p>
                <p>
                  Boasting more than 10 years in the travel industry, Irfan Express is known for its exceptional service, offering visa assistance—including biometric processing for Hajj and Umrah visas—guided ziyarat tours, and round-the-clock support to make your pilgrimage effortless.
                </p>
                <p>
                  We cater to diverse needs with group and individual packages, ensuring flexibility for families, couples, or solo pilgrims, all while maintaining top-quality service across various budget ranges.
                </p>
                <p>
                  Let us handle the logistics, including biometrics, so you can fully immerse yourself in your spiritual experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-2">
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  Irfan Express invites you to embark on your Hajj or Umrah pilgrimage with the assurance of over 10 years of specialized travel knowledge and a commitment to outstanding customer service.
                </p>
                <p>
                  We work closely with you to create customized packages that fit your timeline and spiritual aspirations, covering flights, accommodations, and biometric services for Hajj and Umrah visa applications.
                </p>
                <p>
                  Whether you’re looking for a simple Umrah package or a detailed Hajj plan, we manage every aspect, ensuring a stress-free journey to Mecca and Medina with expert guidance.
                </p>
                <p>
                  Choose Irfan Express as your trusted travel agency for a sacred pilgrimage experience, where we prioritize your spiritual fulfillment with professional care and biometric support at every step.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={'/madina.jpg'}
                alt="Madina Image"
                height={300}
                width={700}
                className="object-cover overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-2">
          <Link href={'/Contact'}>
            <Button
              variant={'outline'}
              className="border border-black rounded-full h-12 text-2xl font-light"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;