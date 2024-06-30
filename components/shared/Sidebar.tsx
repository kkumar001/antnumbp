import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { faMagnifyingGlass, faHouse, faBarChart, faChartPie, faUsers, faTableCells, faGear, faCircleRadiation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <aside className='w-[72px] h-full px-5 py-2 flex flex-col border border-[#E5E7EB] rounded-[8px] items-center justify-between'>
            <div className='flex flex-col gap-[24px] items-center w-full'>
                <Link href='/'>
                    <Image src={logo} alt='logo' className='size-[32px] rounded-[6px]' />
                </Link>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[18px] text-[#374151]' />
                <div className='flex flex-col w-full gap-[46px] items-center'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center size-10 bg-[#EEF2FF] rounded'>
                            <FontAwesomeIcon icon={faHouse} className='size-[18px] text-[#374151]' />
                        </div>
                        <div className='flex items-center justify-center size-10 rounded'>
                            <FontAwesomeIcon icon={faBarChart} className='size-[18px] text-[#374151]' />
                        </div>
                        <div className='flex items-center justify-center size-10 rounded'>
                            <FontAwesomeIcon icon={faChartPie} className='size-[18px] text-[#374151]' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center size-10 rounded'>
                            <FontAwesomeIcon icon={faUsers} className='size-[18px] text-[#374151]' />
                        </div>
                        <div className='flex items-center justify-center size-10 rounded'>
                            <FontAwesomeIcon icon={faUserCircle} className='size-[18px] text-[#374151]' />
                        </div>
                        <div className='flex items-center justify-center size-10 rounded'>
                            <FontAwesomeIcon icon={faTableCells} className='size-[18px] text-[#374151]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center w-full'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center size-10 rounded'>
                        <FontAwesomeIcon icon={faCircleRadiation} className='size-[18px] text-[#374151]' />
                    </div>
                    <div className='flex items-center justify-center size-10 rounded'>
                        <FontAwesomeIcon icon={faGear} className='size-[18px] text-[#374151]' />
                    </div>
                </div>
                <div className='w-[56px] h-[56px] p-2 flex items-end justify-end border border-[#F3F4F6] rounded-[8px]'>
                    <div className='size-[10px] bg-[#22C55E] rounded-full' />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar