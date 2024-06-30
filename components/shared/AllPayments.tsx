import * as React from "react"
import { Button } from '../ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { DatePicker } from "./DatePicker"


const AllPayments = () => {
    return (
        <section className='ml-4 mr-6 flex flex-col'>
            <div className='p-2 flex items-center h-[30px] w-full bg-[#374151] rounded-t-[16px]'>
                <p className='text-xs font-semibold text-white'>Apply to All Payments</p>
            </div>
            <div className='p-4 flex flex-col gap-4 rounded-b-[16px] bg-[#F9FAFB] w-full'>
                <div className='flex justify-between'>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="bankAccount" className="text-sm font-medium">Bank Account<sup className="text-[red]">*</sup></Label>
                            <Select defaultValue='1'>
                                <SelectTrigger className="w-[180px] text-[#9CA3AF] h-8">
                                    <SelectValue placeholder="10401 Bank Account" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="cursor-pointer">
                                        <SelectItem value="1" className="cursor-pointer">10401 Bank Account</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="tNumber" className="text-sm font-medium">Transaction Number</Label>
                            <div className="flex items-center gap-1">
                                <Input placeholder='1' className="h-8 placeholder:text-[#9CA3AF]" />
                                <FontAwesomeIcon icon={faCircleInfo} className="size-4 text-[#9CA3AF]" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="pmode" className="text-sm font-medium">Payment Mode<sup className="text-[red]">*</sup></Label>
                            <Select defaultValue='cash'>
                                <SelectTrigger className="w-[180px] text-[#9CA3AF] h-8">
                                    <SelectValue placeholder="Cash" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="cursor-pointer">
                                        <SelectItem value="cash" className="cursor-pointer">Cash</SelectItem>
                                        <SelectItem value="cc" className="cursor-pointer">Credit Card</SelectItem>
                                        <SelectItem value="bd" className="cursor-pointer">Bank deposit</SelectItem>
                                        <SelectItem value="bt" className="cursor-pointer">Bank transfer</SelectItem>
                                        <SelectItem value="c" className="cursor-pointer">Check</SelectItem>
                                        <SelectItem value="op" className="cursor-pointer">Online payment</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="pdate" className="text-sm font-medium">Payment Date<sup className="text-[red]">*</sup></Label>
                            <DatePicker />
                        </div>
                    </div>
                    <Button variant="outline" className="text-[#374151] text-sm">+ Add Attachment</Button>
                </div>
                <div className="flex justify-between items-end w-full">
                    <div className='flex flex-col gap-2 w-full'>
                        <Label htmlFor="des" className="text-sm font-medium">Description</Label>
                        <div className="flex items-center gap-1">
                            <Input placeholder='Office chair for design department' className="h-8 w-[70%] placeholder:text-[#9CA3AF]" id="des" />
                        </div>
                    </div>
                    <Button className="text-white text-sm bg-[#6366F1] hover:bg-[#5a5df3] h-8">Apply To All</Button>
                </div>
            </div>
        </section>
    )
}

export default AllPayments