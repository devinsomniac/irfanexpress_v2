import React from 'react'
interface Plan {
    time: string;
    placeName: string;
    placeDetails: string;
    ticketPricing: string;
    transportation: string;
    speciality: string;
}

interface PlanCardProps {
    plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
    return (
        <div className="plan-card p-4 border rounded-lg mb-4 bg-yellow-50 md:h-[230px]">
            <h4 className="font-semibold text-lg">{plan.time}</h4>
            <h5 className="font-bold text-xl">{plan.placeName}</h5>
            <p>{plan.placeDetails}</p>
            <p>
                <strong>Ticket Pricing:</strong> {plan.ticketPricing}
            </p>
            <p>
                <strong>Transportation:</strong> {plan.transportation}
            </p>
            <p>
                <strong>Speciality:</strong> {plan.speciality}
            </p>
        </div>
    )
}

export default PlanCard