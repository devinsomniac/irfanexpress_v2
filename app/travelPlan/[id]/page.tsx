import { db } from '@/lib/db';
import { travelPlan, PlanDetails } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

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
  searchParams: { data?: string };
}) => {
  let travelPlanData: TravelPlanData | null = null;
  const { id } = await params
  if (id !== "preview") {
    const savedPlan = await db
      .select()
      .from(travelPlan)
      .where(eq(travelPlan.planId, id))
      .limit(1);
    if (savedPlan.length > 0) {
      travelPlanData = savedPlan[0];
    }
  } else if (searchParams.data) {
    travelPlanData = JSON.parse(decodeURIComponent(searchParams.data));
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
      <h1 className="text-3xl font-bold mb-4">{planDetails.tripName}</h1>
      <p><strong>Destination:</strong> {planDetails.destination}</p>
      <p><strong>Duration:</strong> {typeof planDetails.duration === "string" ? planDetails.duration : `${planDetails.duration} days`}</p>
      <p><strong>Travelers:</strong> {planDetails.travelers}</p>
      <p><strong>Budget:</strong> {typeof planDetails.budget === "string" ? planDetails.budget : planDetails.budget.category}</p>
      <p><strong>Currency:</strong> {planDetails.currency || "Not specified"}</p>
      <p><strong>Accommodation:</strong> {planDetails.accommodation?.type || "Not specified"}</p>
      <p><strong>Accommodation Cost:</strong> {planDetails.accommodation?.cost || planDetails.accommodation?.cost_per_night || "Not specified"}</p>
      <p><strong>Accommodation Recommendations:</strong> {planDetails.accommodation?.recommendations?.join(", ") || "No recommendations"}</p>
      <p><strong>Accommodation Tips:</strong> {planDetails.accommodation?.tips?.join(", ") || "No tips"}</p>

      {planDetails.food && (
        <div>
          <p><strong>Food Style:</strong> {planDetails.food.style || "Not specified"}</p>
          <p><strong>Food Cost per Day:</strong> {planDetails.food.estimated_cost_per_day || "Not specified"}</p>
          <p><strong>Food Recommendations:</strong> {planDetails.food.recommendations?.join(", ") || "No recommendations"}</p>
          <p><strong>Food Tips:</strong> {planDetails.food.tips?.join(", ") || "No tips"}</p>
        </div>
      )}

      {planDetails.transportation && (
        <div>
          <p><strong>Transportation Type:</strong> {planDetails.transportation.type || "Not specified"}</p>
          <p><strong>Transportation Cost:</strong> {planDetails.transportation.cost || planDetails.transportation.estimated_cost_per_day || "Not specified"}</p>
          <p><strong>Transportation Tips:</strong> {planDetails.transportation.tips?.join(", ") || "No tips"}</p>
        </div>
      )}

      {planDetails.important_notes && planDetails.important_notes.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mt-4">Important Notes</h2>
          <ul className="list-disc pl-5">
            {planDetails.important_notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-4">Daily Plan</h2>
      {planDetails.itinerary && Array.isArray(planDetails.itinerary) && planDetails.itinerary.length > 0 ? (
        planDetails.itinerary.map((day) => (
          <div key={day.day} className="mt-2">
            <h3 className="text-xl font-medium">Day {day.day}: {day.theme}</h3>
            <ul className="list-disc pl-5">
              {day.activities && Array.isArray(day.activities) && day.activities.length > 0 ? (
                day.activities.map((activity, index) => (
                  <li key={index}>
                    <strong>{activity.name}</strong> at {activity.time} - {activity.cost} {planDetails.currency || "INR"}
                    {activity.tips && Array.isArray(activity.tips) && activity.tips.length > 0 ? (
                      <ul className="list-circle pl-5">
                        {activity.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="pl-5 text-gray-300">No tips available</p>
                    )}
                  </li>
                ))
              ) : (
                <p className="pl-5 text-gray-300">No activities for this day.</p>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-gray-300">No daily plan available.</p>
      )}
    </div>
  );
};

export default Page;