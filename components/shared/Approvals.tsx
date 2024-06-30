import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Approvals = () => {
    return (
        <section className='ml-4 mr-6 flex flex-col mt-4'>
            <div className='p-2 flex items-center h-[30px] w-full bg-[#374151] rounded-t-[16px]'>
                <p className='text-xs font-semibold text-white'>Approvals</p>
            </div>
            <div className='p-4 flex flex-col gap-4 rounded-b-[16px] bg-[#F9FAFB] w-full'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="approver" className="text-[#111827] text-[14px] font-medium">Approver</Label>
                    <Input id="approver" className="h-8 w-full placeholder:text-[#9CA3AF]" placeholder="eg: VI-ABCI23" />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="note" className="text-[#111827] text-[14px] font-medium">Note</Label>
                    <Textarea id="note" className="w-full placeholder:text-[#9CA3AF]" placeholder="Some dummy text goes here." />
                </div>
            </div>
        </section>
    )
}

export default Approvals