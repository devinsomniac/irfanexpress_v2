import React from 'react'
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

const SearchForm = () => {
    return (
        <div className='p-5 flex flex-col md:flex-row gap-1 bg-white rounded-2xl md:rounded-full mt-20'>
            <Input
                type='text'
                placeholder='Destination'
                className='rounded-full w-[200px]'
            />
            <Input
                type='number'
                placeholder='Number of Days'
                className='rounded-full w-[200px]'
            />
            <Select>
                <SelectTrigger className="w-[180px] rounded-full">
                    <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Cheap">Cheap</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] rounded-full">
                    <SelectValue placeholder="Companions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Me">Just Me</SelectItem>
                    <SelectItem value="Couple">A Couple</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Family">Friends</SelectItem>
                </SelectContent>
            </Select>
            <Button className='rounded-full bg-yellow-400 text-black'>
                Generate
                <IoSearchSharp />
            </Button>
        </div>
    )
}

export default SearchForm