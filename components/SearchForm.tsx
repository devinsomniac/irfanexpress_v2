'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { IoSearchSharp } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { chatSession } from '@/Services/aimodel';
import { useRouter } from 'next/navigation';
import { TbFidgetSpinner } from "react-icons/tb";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/Services/FirebaseConfig';
import {v4 as uuidv4} from 'uuid'
import {useSession} from 'next-auth/react'

interface FormData {
    destination: string,
    nod: number,
    budget: string,
    comapanions: string
}


  

const SearchForm = () => {
    const router = useRouter()
    const {data :session} = useSession()
    const promt = "Generate Travel Plan for Location: {location} for {days} Days for {companions} with a {budget} budget, Give me a  itinerary with placeName, Place Details, ticket Pricing(if not available type - Check Official website), Time  travel each of the location for 3 days with each day plan with best time to visit in and also speciallity of the location the user has requested like {location} in this case like transportation, food, clothes, etc JSON format."
    const [formData, setFormData] = useState<FormData>({
        destination: '',
        nod: 0,
        budget: '',
        comapanions: ''
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))

    }

    const handleSelectChange = (name: keyof FormData, value: string) => {
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);
        try {
            console.log(formData)
            const Final_Prompt = promt
                .replace('{location}', formData?.destination)
                .replace('{days}', String(formData?.nod))
                .replace('{companions}', formData?.comapanions)
                .replace('{budget}', formData?.budget)
            console.log(Final_Prompt)

            const result = await chatSession.sendMessage(Final_Prompt)
            console.log(result?.response?.text())
            const resultText = result.response.text();
            const docId = Date.now().toString()
            const resultJson = JSON.parse(resultText)
            SaveTrip(resultJson,docId)

            // Navigate to the dynamic page with the result as a query parameter
            router.push(`/Trip/${docId}`);
        } catch (err) {
            console.log("There has been an error ", err)
        } finally {
            setLoading(false)
        }
    }

    const SaveTrip = async(TripData : string,docId : string) => {
        let userInformation
        if (session?.user){
            userInformation = session.user
        }else{
            userInformation = uuidv4()
        }
        
        await setDoc(doc(db, "AITrips", docId), {
            userSelection : formData,
            tripData : TripData,
            userInfo : userInformation,
            id : docId
          });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='p-5 flex flex-col md:flex-row gap-1 bg-white rounded-2xl md:rounded-full mt-20 border-[2px] border-black'>
            <Input
                type='text'
                placeholder='Destination'
                className='rounded-full w-[200px]'
                name='destination'
                value={formData.destination}
                onChange={handleChange}

            />

            <Input
                type='number'
                placeholder='Number of Days'
                className='rounded-full w-[200px]'
                name='nod'
                value={formData.nod}
                onChange={handleChange}

            />
            <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger className="w-full md:w-[180px] rounded-full">
                    <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Cheap">Cheap</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleSelectChange('comapanions', value)} >
                <SelectTrigger className="w-full md:w-[180px] rounded-full">
                    <SelectValue placeholder="Companions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Me">Just Me</SelectItem>
                    <SelectItem value="Couple">A Couple</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Friends">Friends</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" disabled={loading} className='rounded-full bg-yellow-400 text-black hover:bg-red-600 hover:text-yellow-400' >
                {loading ? (
                    <TbFidgetSpinner className='animate-spin text-black' />
                ) : (
                    <>
                        Generate
                        <IoSearchSharp />
                    </>
                )}
            </Button>
        </form>
    );
}

export default SearchForm;

