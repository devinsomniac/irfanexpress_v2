import { db } from '@/lib/db';
import { travelPlan, PlanDetails } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { FcPlanner } from "react-icons/fc";


interface TravelPlanData {
  planId?: string | null;
  destination: string;
  groupSize: number;
  budget: string;
  duration: number;
  planDetails: PlanDetails;
}

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ data?: string }>;
}) => {
  let travelPlanData: TravelPlanData | null = null;
  const { id } = await params
  const { data } = await searchParams
  if (id !== "preview") {
    const savedPlan = await db
      .select()
      .from(travelPlan)
      .where(eq(travelPlan.planId, id))
      .limit(1);
    if (savedPlan.length > 0) {
      travelPlanData = savedPlan[0];
    }
  } else if (data) {
    travelPlanData = JSON.parse(decodeURIComponent(data));
  }

  if (!travelPlanData) {
    return <div>Loading or Plan Not Found...</div>;
  }

  const { planDetails } = travelPlanData;
  console.log("Plan Details:", planDetails);

  return (
    <div
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-[calc(100vh-120px)] p-4 "
    >
      <div className='p-4 md:p-10 flex flex-col gap-2'>
        {/* Title */}
        <div className='rounded-3xl bg-white grid grid-cols-1 md:grid-cols-5 p-3 shadow-2xl'>
          <div className='h-[150px] w-[150px] col-span-1 md:flex justify-center items-center hidden'>
            <Image src={'/RandomImage/Image1.jpg'} alt='random Image' height={300} width={150} className='object-cover h-full w-full shadow-xl rounded-2xl overflow-hidden' loading='lazy' />
          </div>
          <div className='col-span-4'>
            <h1 className='font-bold text-6xl text-blue-700'> Your <span className='text-orange-600'>Travel</span> Itinerary</h1>
            <h2 className='font-medium text-xl'>{planDetails.tripName}</h2>
            <h2 className='font-medium text-xl'>A Journey for {planDetails.duration} for {planDetails.travelers} in {typeof planDetails.budget === "string" ? planDetails.budget : planDetails.budget.category} budget</h2>
            <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
          </div>
        </div>


        {/* Utilities */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {/* Accommodation Card */}
          <div className='p-8 shadow-2xl rounded-3xl md:h-[500px] border w-full bg-white flex flex-col gap-2'>
            <h1 className='font-bold text-xl text-blue-700'> Your <span className='text-orange-600'>Accommodation</span></h1>
            <div className='h-[200px] w-full flex justify-center items-center mx-auto'>
              <Image
                src={'/RandomImage/Hotel.jpg'}
                alt='random Image'
                height={150}
                width={150}
                className='object-cover h-full w-full shadow-xl rounded-2xl'
                loading='lazy'
              />
            </div>
            <div>
              <p><strong>Accommodation:</strong> {planDetails.accommodation?.type || "Not specified"}</p>
              <p><strong>Accommodation Cost:</strong> {planDetails.accommodation?.cost || planDetails.accommodation?.cost_per_night || "Not specified"}</p>
              <p><strong>Accommodation Recommendations:</strong> {planDetails.accommodation?.recommendations?.join(", ") || "No recommendations"}</p>
              <p><strong>Accommodation Tips:</strong> {planDetails.accommodation?.tips?.join(", ") || "No tips"}</p>
              <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
            </div>
          </div>

          {/* Food Card */}
          <div className='p-8 shadow-2xl rounded-3xl md:h-[500px] border w-full bg-white flex flex-col gap-2'>
            <h1 className='font-bold text-2xl text-blue-700'> Your <span className='text-orange-600'>Food</span></h1>
            <div className='h-[200px] w-full flex justify-center items-center'>
              <Image
                src={'/RandomImage/Food.jpg'}
                alt='random Image'
                height={150}
                width={150}
                className='object-cover h-full w-full shadow-xl rounded-2xl'
                loading='lazy'
              />
            </div>
            <div>
              {planDetails.food && (
                <div>
                  <p><strong>Food Style:</strong> {planDetails.food.style || "Not specified"}</p>
                  <p><strong>Food Cost per Day:</strong> {planDetails.food.estimated_cost_per_day || "Not specified"}</p>
                  <p><strong>Food Recommendations:</strong> {planDetails.food.recommendations?.join(", ") || "No recommendations"}</p>
                  <p><strong>Food Tips:</strong> {planDetails.food.tips?.join(", ") || "No tips"}</p>
                </div>
              )}
              <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
            </div>
          </div>

          {/* Transportation Card */}
          <div className='p-8 shadow-2xl rounded-3xl md:h-[500px] border w-full bg-white flex flex-col gap-2'>
            <h1 className='font-bold text-2xl text-blue-700'> Your <span className='text-orange-600'>Transportation</span></h1>
            <div className='h-[200px] flex justify-center items-center'>
              <Image src={'/RandomImage/Transport.jpg'} alt='offer Image' height={200} width={200} className='object-cover h-full w-full shadow-xl rounded-2xl overflow-hidden' loading='lazy' />
            </div>
            {planDetails.transportation && (
              <div>
                <p><strong>Transportation Type:</strong> {planDetails.transportation.type || "Not specified"}</p>
                <p><strong>Transportation Cost:</strong> {planDetails.transportation.cost || planDetails.transportation.estimated_cost_per_day || "Not specified"}</p>
                <p><strong>Transportation Tips:</strong> {planDetails.transportation.tips?.join(", ") || "No tips"}</p>
              </div>
            )}
            <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
          </div>
        </div>


        {/* Detailed Plan */}


        <div className='p-8 bg-white rounded-2xl shadow-2xl '>
          <div className='text-center flex justify-center items-center gap-2'>
            <h2 className="text-4xl font-semibold">Daily Plan</h2>
            <FcPlanner className='text-4xl' />
          </div>

          {planDetails.itinerary && planDetails.itinerary.length > 0 ? (
            planDetails.itinerary.map((day) => (


              <div key={day.day} className="mt-2 bg-white shadow-xl p-4 rounded-lg">
                <div className='flex flex-col md:flex-row justify-start items-center gap-2'>
                  <div className=' relative p-4 rounded-lg'>
                    <Image src={'/RandomImage/Image5.jpg'} alt='Random Image' height={150} width={250} className='object-contain h-full w-full rounded-xl' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                      <h3 className="text-white text-4xl font-bold">Day {day.day}</h3>
                    </div>
                  </div>
                  <div>
                  <h3 className="text-2xl md:text-4xl font-medium text-orange-600 font-sans"> {day.theme}</h3>
                  </div>
                </div>



                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 shadow-lg p-2 border">
                    {day.activities && Array.isArray(day.activities) && day.activities.length > 0 ? (
                      day.activities.map((activity, index) => (
                        <div key={index}>
                          <div>
                          <h2 className='text-xl  md:text-2xl'><strong>{activity.name}</strong> at {activity.time} - {activity.cost} {planDetails.currency || "INR"}</h2>
                          <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2 hidden md:block' />
                          </div>
                          {activity.tips && Array.isArray(activity.tips) && activity.tips.length > 0 ? (
                            <ul className=" pl-5">
                              {activity.tips.map((tip, tipIndex) => (
                                <li className='list-disc' key={tipIndex}>{tip}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="pl-5 text-gray-300">No tips available</p>
                          )}
                          <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2 block md:hidden' />
                        </div>
                      ))
                    ) : (
                      <p className="pl-5 text-gray-300">No activities for this day.</p>
                    )}
                  </div>
                </div>
            ))
          ) : (
            <p className="text-gray-300">No daily plan available.</p>
          )}
        </div>





        {/* Important Notes */}
        <div className='bg-white rounded-3xl shadow-2xl p-8'>
          {planDetails.important_notes && planDetails.important_notes.length > 0 && (
            <div>
              <h2 className="text-4xl font-semibold"><span className='text-orange-600'>Important</span> Notes</h2>
              <ul className="list-disc">
                {planDetails.important_notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Page;