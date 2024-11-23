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

interface FormData {
    destination: string;
    nod: string;
    budget: string;
    companions: string;
}

const SearchForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        destination: '',
        nod: '',
        budget: '',
        companions: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name: keyof FormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='p-5 flex flex-col md:flex-row gap-1 bg-white rounded-2xl md:rounded-full mt-20 border-[1px]'>
            <Input
                type='text'
                placeholder='Destination'
                className='rounded-full w-[200px]'
                onChange={handleChange}
                name='destination'
                value={formData.destination}
            />
            <Input
                type='number'
                placeholder='Number of Days'
                className='rounded-full w-[200px]'
                onChange={handleChange}
                name='nod'
                value={formData.nod}
            />
            <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger className="w-[180px] rounded-full">
                    <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Cheap">Cheap</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleSelectChange('companions', value)}>
                <SelectTrigger className="w-[180px] rounded-full">
                    <SelectValue placeholder="Companions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Me">Just Me</SelectItem>
                    <SelectItem value="Couple">A Couple</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Friends">Friends</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" className='rounded-full bg-yellow-400 text-black'>
                Generate
                <IoSearchSharp />
            </Button>
        </form>
    );
}

export default SearchForm;
