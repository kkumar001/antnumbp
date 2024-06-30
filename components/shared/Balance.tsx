import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEquals, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Balance = () => {
    return (
        <div className='border-t fixed bottom-0 w-full bg-white border-[#E5E7EB] flex items-center gap-4 py-2 px-4' style={{ boxShadow: "0px -2px 6px 0px #1018280F" }}>
            <div className='py-3 px-4 flex-col gap-2 border border-[#E0E7FF] rounded-2xl w-[368px]'>
                <p className='text-[#374151] text-[14px]'>Total Amount Due:</p>
                <p className='text-[#111827] font-semibold text-lg'>50,000,400.00 <span className='text-[#9CA3AF] font-normal'>(€)</span></p>
            </div>
            <FontAwesomeIcon icon={faMinus} className='size-[24px] text-[#6366F1]'/>
            <div className='py-3 px-4 flex-col gap-2 border border-[#E0E7FF] rounded-2xl w-[368px]'>
                <p className='text-[#374151] text-[14px]'>Total Paid Amount:</p>
                <p className='text-[#111827] font-semibold text-lg'>10,000,080.00 <span className='text-[#9CA3AF] font-normal'>(€)</span></p>
            </div>
            <FontAwesomeIcon icon={faEquals} className='size-[24px] text-[#6366F1]'/>
            <div className='py-3 px-4 flex-col gap-2 border border-[#E0E7FF] rounded-2xl w-[368px]'>
                <p className='text-[#374151] text-[14px]'>Total Balance:</p>
                <p className='text-[#6366F1] font-semibold text-lg'>60,00,480.00 <span className='text-[#9CA3AF] font-normal'>(€)</span></p>
            </div>
            <FontAwesomeIcon icon={faCircleXmark} className='size-[28px] text-[#374151] fixed right-4'/>
        </div>
    )
}

export default Balance