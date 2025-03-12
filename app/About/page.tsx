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
            <h1 className="font-medium text-4xl text-left">About</h1>
            <Separator className="w-[180px] bg-orange-600 h-[6px] rounded-full my-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-2">
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  Irfan Express, a trusted travel agency with over 10 years of experience, has been dedicated to crafting personalized travel itineraries that cater to the unique needs of every traveler.
                </p>
                <p>
                  Specializing in comprehensive travel packages, we offer seamless booking services for flights, hotels, and transportation, ensuring a stress-free journey from start to finish.
                </p>
                <p>
                Whether you\'re dreaming of exploring vibrant tourist destinations like Singapore, Malaysia, Thailand, Nepal, or countless other global hotspots, our expert team designs tailor-made packages that align with your budget, preferences, and travel style.                </p>
                <p>
                  At Irfan Express, we take pride in handling every detail of your trip—be it arranging flight tickets, securing hotel accommodations, or curating guided tours—so you can focus on creating unforgettable memories in some of the world’s most breathtaking locations.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={'/About1.jpg'}
                alt="About Image 1"
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
                alt="About Image 2"
                height={300}
                width={700}
                className="object-cover overflow-hidden rounded-xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  Our extensive range of services extends beyond leisure travel, as Irfan Express is also renowned for creating specialized packages for Umrah and Hajj pilgrimages.
                </p>
                <p>
                  With a decade of expertise in the travel industry, we understand the spiritual significance of these journeys and offer meticulously planned packages that include flights, accommodations, and guided support to ensure a smooth and fulfilling experience for pilgrims.
                </p>
                <p>
                  Our global reach allows us to provide travel solutions for every country, offering diverse options for luxury, mid-range, and budget travelers alike.
                </p>
                <p>
                Whether you\'re seeking a cultural adventure in Nepal, a tropical escape in Thailand, a modern city experience in Singapore, or a spiritual pilgrimage, Irfan Express is your go-to travel agency for personalized, hassle-free, and affordable travel planning that guarantees satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-2">
            <div className="flex justify-center items-center">
              <div className="md:text-2xl">
                <p>
                  Choose Irfan Express for an exceptional travel experience backed by our 10+ years of industry knowledge and a passion for customer satisfaction.
                </p>
                <p>
                  Our dedicated team works closely with each client to understand their travel goals, curating itineraries that perfectly match their desires, from family vacations to solo adventures.
                </p>
                <p>
                  We specialize in creating all-inclusive travel packages for top tourist destinations like Malaysia, Singapore, Thailand, and Nepal, as well as spiritual journeys like Umrah and Hajj, ensuring every aspect of your trip is expertly handled.
                </p>
                <p>
                  With a commitment to delivering memorable journeys, Irfan Express combines global expertise, competitive pricing, and personalized service to make your travel dreams a reality, no matter where in the world you wish to go. Let us take care of the details while you embark on a journey of a lifetime with the best travel agency for customized international travel packages.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={'/About3.jpg'}
                alt="About Image 3"
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