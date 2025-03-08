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

const SearchForm = () => {
    const [formData,setFormData] = useState({
        destination : "",
        group : "",
        budget: "",
        duration : ""
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSelectChange = (value:string) => {
        setFormData((prev)=>(
            {
                ...prev,
                budget : value,
            }
        ))
    }
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        try{
            const response = await fetch('/api/generativeApi',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const data = await response.json()
                console.log("API Response:", data)
            } else {
                console.log("There has been an error:", response.status)
            }

        }catch(err){
            console.log("There has been an error in Search Form",err)
        }
        

    }
    return (
        <div className='flex justify-center'>
        <div className='p-10 bg-white shadow-2xl flex justify-center rounded-3xl w-[400px] md:w-[1000px]'>
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center gap-4 justify-center border-black border-2 rounded-xl  md:rounded-full bg-yellow-50 w-[950px] p-12 md:p-8 text-white font-medium'>
                <div>
                    <Input placeholder='Destination' className='bg-white text-black' type='text' name='destination' value={formData.destination} onChange={handleChange}/>
                </div>
                <div>
                    <Input placeholder='Number of People' className='bg-white text-black' type='number' min={1} name='group' value={formData.group} onChange={handleChange}/>
                </div>
                <div>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className=" w-[220px] md:w-[200px] bg-white text-black">
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
                    <Input placeholder='Duration' type='number' min={1} className='bg-white text-black' name='duration' value={formData.duration} onChange={handleChange}/>
                </div>
                <div>
                    <Button className='bg-yellow-300 text-black' type='submit'>Generate</Button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default SearchForm