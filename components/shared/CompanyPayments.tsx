import React from 'react'
import { faSquareCheck, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { DatePicker } from "./DatePicker"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    dueDate: "11 March 2024",
    invoiceNumber: "P00009",
    invoiceAmount: "2,500.00",
    amountDue: "2,500.00",
    bankCharges: "2,500.00",
    discount: "2,500.00",
    paidAmount: "500.00"
  },
  {
    dueDate: "11 March 2024",
    invoiceNumber: "P00009",
    invoiceAmount: "2,500.00",
    amountDue: "2,500.00",
    bankCharges: "2,500.00",
    discount: "2,500.00",
    paidAmount: "500.00"
  },
]


const CompanyPayment = ({ company  }: { company: String  }) => {
  return (
    <section className='w-full flex flex-col'>
      <div className='ml-4 mr-6 mt-4 p-4 flex flex-col border-t-2 border-[#374151] rounded-t-[8px] bg-[#F9FAFB] gap-4'>
        <div className='flex justify-between w-full'>
          <div className='flex gap-2 text-[#111827] text-[18px] font-bold items-center'>
            <FontAwesomeIcon icon={faSquareCheck} className='text-[#6366F1] size-5' />
            <p>{company}</p>
            <div className='bg-[#F3F4F6] rounded-[24px] flex items-center justify-center px-[10px] py-[2px]'>
              <p className='text-[#374151] font-medium text-[12px]'>16</p>
            </div>
          </div>
          <Button variant="outline" className="text-[#374151] text-sm">+ Add Attachment</Button>
        </div>
        <div className='flex flex-col gap-4 rounded-b-[16px] bg-[#F9FAFB] w-full'>
          <div className='flex justify-between'>
            <div className='flex gap-[30px]'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="bankAccount" className="text-sm font-medium" >Bank Account<sup className="text-[red]">*</sup></Label>
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
                <Label htmlFor="tNumber" className="text-sm font-medium" >Transaction Number</Label>
                <div className="flex items-center gap-1">
                  <Input placeholder='1' className="h-8 placeholder:text-[#9CA3AF]" />
                  <FontAwesomeIcon icon={faCircleInfo} className="size-4 text-[#9CA3AF]" />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="pmode" className="text-sm font-medium" >Payment Mode<sup className="text-[red]">*</sup></Label>
                <Select defaultValue='cash' >
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
                <Label htmlFor="pdate" className="text-sm font-medium" >Payment Date<sup className="text-[red]">*</sup></Label>
                <DatePicker />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end w-full">
            <div className='flex flex-col gap-2 w-full'>
              <Label htmlFor="des" className="text-sm font-medium" >Description</Label>
              <div className="flex items-center gap-1">
                <Input placeholder='Office chair for design department' className="h-8 w-[300px] placeholder:text-[#9CA3AF]" id="des" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full gap-6'>
          <div className='w-[80%]'>
            <Table className="rounded-[16px] border border-[#E0E7FF] ">
              <TableHeader className="bg-[#E0E7FF] border border-[#E0E7FF]">
                <TableRow className="border border-[#E0E7FF]">
                  <TableHead className="w-[50px] border border-[#E0E7FF]"></TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold border border-[#E0E7FF] ">Due Date</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold">Invoice Number</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold">Invoice Amount (€)</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold text-right">Amount Due (€)</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold text-right">Bank Charges (€)</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold text-right">Discount (€)</TableHead>
                  <TableHead className="text-[#374151] text-[12px] font-semibold text-right">Paid Amount (€)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoiceNumber}>
                    <TableCell>
                      <FontAwesomeIcon icon={faSquareCheck} className='text-[#6366F1] size-5' />
                    </TableCell>
                    <TableCell className="text-[#111827] border border-[#E0E7FF]">{invoice.dueDate}</TableCell>
                    <TableCell className="text-[#111827] border border-[#E0E7FF]">{invoice.invoiceNumber}</TableCell>
                    <TableCell className="text-[#111827] border border-[#E0E7FF]">{invoice.invoiceAmount}</TableCell>
                    <TableCell className="text-[#111827] text-right border border-[#E0E7FF]">{invoice.amountDue}</TableCell>
                    <TableCell className="text-[#111827] text-right border border-[#E0E7FF]">{invoice.bankCharges}</TableCell>
                    <TableCell className="text-[#111827] text-right border border-[#E0E7FF]">{invoice.discount}</TableCell>
                    <TableCell className="text-[#111827] text-right border border-[#E0E7FF]">{invoice.paidAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* <TableFooter className="bg-[#E0E7FF]">
            <TableRow>
              <TableCell colSpan={7}>Total</TableCell>
              <TableCell className="text-right">2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
            </Table>
          </div>
          <div className='flex items-center justify-center rounded-[8px] h-[52px] p-2 border border-[#F3F4F6]'>
            <FontAwesomeIcon icon={faPlus} className='size-5 text-[#04071E]' />
          </div>
        </div>
      </div>
      <div className='bg-[#F2F3F5] border-b-2 border-[#374151] rounded-b-[8px] ml-4 mr-6 flex justify-end py-2 px-3'>
        <p className='text-[14px] text-[#374151] font-bold'>{company} Payment Total: 1,000.00</p>
      </div>
    </section>
  )
}

export default CompanyPayment