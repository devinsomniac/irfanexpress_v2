'use client'
import React, { ChangeEvent, useState } from 'react'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { FaStarOfLife } from "react-icons/fa6";


const SearchForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        destination: "",
        group: "",
        budget: "",
        duration: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (value: string) => {
        setFormData((prev) => (
            {
                ...prev,
                budget: value,
            }
        ))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        try {
            const response = await fetch('/api/generativeApi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const data = await response.json()
                console.log("API Response:", data)
                const { planId } = data.data;
                if (planId) {
                    router.push(`/travelPlan/${planId}`)
                } else {
                    router.push(`/travelPlan/preview?data=${encodeURIComponent(JSON.stringify(data.data))}`)
                    console.log(data.data)
                }
            } else {
                console.log("There has been an error:", response.status)
            }

        } catch (err) {
            console.log("There has been an error in Search Form", err)
        } finally {
            setLoading(false)
        }


    }
    return (
        <div className='flex justify-center'>
            <div className='p-10 shadow-2xl flex justify-center rounded-3xl w-[400px] md:w-[1000px]' style={{ background: "linear-gradient(315deg, #5A4FCF 0%, #242124 74%)" }}>
                <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center gap-4 justify-center border-black border-2 rounded-xl  md:rounded-full bg-yellow-50 w-[950px] p-12 md:p-8 text-white font-medium'>
                    <div>
                        <Input placeholder='Destination' className='bg-white text-black rounded-3xl' type='text' name='destination' value={formData.destination} onChange={handleChange} />
                    </div>
                    <div>
                        <Input placeholder='Number of People' className='bg-white text-black rounded-3xl' type='number' min={1} name='group' value={formData.group} onChange={handleChange} />
                    </div>
                    <div>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className=" w-[220px] md:w-[200px] bg-white text-black rounded-3xl">
                                <SelectValue placeholder="Budget" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Low">Low</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Input placeholder='Duration' type='number' min={1} className='bg-white text-black rounded-3xl' name='duration' value={formData.duration} onChange={handleChange} />
                    </div>
                    <div>
                        <Button className='bg-orange-500 text-black rounded-3xl hover:bg-yellow-300' disabled={loading} type='submit'>{loading ? <FaStarOfLife className="animate-spin" /> : "Generate"}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm