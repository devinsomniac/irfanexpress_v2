import React from 'react'
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
    return (
        <div className='flex justify-center'>
        <div className='p-10 bg-white shadow-2xl flex justify-center rounded-3xl w-[400px] md:w-[1000px]'>
            <form action="" className='flex flex-col md:flex-row items-center gap-4 justify-center border-black border-2 rounded-xl  md:rounded-full bg-yellow-50 w-[950px] p-12 md:p-8 text-white font-medium'>
                <div>
                    <Input placeholder='Destination' className='bg-white text-black' type='text' />
                </div>
                <div>
                    <Input placeholder='Number of People' className='bg-white text-black' type='number' min={1} />
                </div>
                <div>
                    <Select>
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
                    <Input placeholder='Duration' type='number' min={1} className='bg-white text-black'/>
                </div>
                <div>
                    <Button className='bg-yellow-300 text-black'>Generate</Button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default SearchForm