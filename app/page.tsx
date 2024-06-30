import Sidebar from '@/components/shared/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faHouse, faAngleRight, faReceipt, faSearch, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Button } from '@/components/ui/button'
import AllPayments from '@/components/shared/AllPayments'
import CompanyPayment from '@/components/shared/CompanyPayments'
import Approvals from '@/components/shared/Approvals'
import Balance from '@/components/shared/Balance'

const BillPayment = () => {
  return (
    <div className='w-full h-[100vh] flex'>
      <Sidebar />
      <main className='w-[calc(100vw-72px)] h-full flex flex-col overflow-scroll pb-[108px]'>
        <header className='w-full flex justify-between items-end px-6 py-4 border-b border-b-[#E5E7EB]'>
          <div className='flex flex-col'>
            <div className='flex h-5 gap-1'>
              <div className='flex gap-1 text-[#6B7280]'>
                <FontAwesomeIcon icon={faHouse} className='size-[14px]' />
                <p className='text-[10px]'>Home</p>
              </div>
              <FontAwesomeIcon icon={faAngleRight} className='size-[14px] text-[#D1D5DB]' />
              <p className='text-[10px] text-[#6B7280]'>Payable</p>
              <FontAwesomeIcon icon={faAngleRight} className='size-[14px] text-[#D1D5DB]' />
              <p className='text-[10px] text-[#6B7280]'>Invoice</p>
              <FontAwesomeIcon icon={faAngleRight} className='size-[14px] text-[#D1D5DB]' />
              <div className='flex gap-1 text-[#6366F1]'>
                <FontAwesomeIcon icon={faReceipt} className='size-[14px]' />
                <p className='text-[10px]'>Invoice# VI-ABCI23</p>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <h3 className='text-[#9CA3AF] text-[32px] font-bold'>Invoice Payment <span className='text-[#111827]'>#VI-ABCI23</span></h3>
              <div className='flex items-center justify-center px-1 py-2 text-[12px] text-[#111827] bg-[#FEF3C7] rounded-[100px]'>
                <p>Overdue</p>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex h-10 w-[418px] border border-[#E5E7EB] rounded-[8px] px-2 py-3 gap-[2px]'>
              <input
                type="text"
                name="search"
                // value="" 
                placeholder='Search'
                className='focus:outline-none w-full text-sm'
              />
              <FontAwesomeIcon icon={faSearch} className='size-[14px] text-[#371f37]'/>
            </div>
            <div className='flex gap-2 h-10'>
              <div className='size-[40px] flex items-center justify-center border border-[#E5E7EB] rounded-[8px]'>
                <FontAwesomeIcon icon={faClockRotateLeft} className='size-[20px] text-[#1F2937]'/>
              </div>
              <div className='size-[40px] flex items-center justify-center border border-[#E5E7EB] rounded-[8px]'>
                <FontAwesomeIcon icon={faEnvelope} className='size-[20px] text-[#04071E]'/>
              </div>
            </div>
          </div>
        </header>
        <div className='flex justify-end gap-2 my-4 ml-4 mr-10'>
          <Button variant="outline" className="text-[#374151]">Close</Button>
          <Button className="text-white bg-[#6366F1] hover:bg-[#5a5df3]">Save</Button>
        </div>
        <AllPayments />
        <CompanyPayment company="Apple" />
        <CompanyPayment company="Microsoft" />
        <Approvals />
        <Balance />
      </main>
    </div>
  )
}

export default BillPayment