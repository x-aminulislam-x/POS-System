import { faEdit, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Invoice = () => {


    return (
        <div className='bg-[#f4f4f4] flex flex-col justify-between rounded-sm p-3'>
            <div>
                Walk in Customer
            </div>
            <div>
                <div className='grid grid-cols-[1fr,1fr] py-1 px-2 border-b border-t-2 border-[#bdb8b8]'>
                    <div className='flex justify-between'>
                        <span className='font-medium'>Items</span>
                        <span className='pr-3 font-bold'>7(7.00)</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>Total</span>
                        <span className='pl-3 font-bold'>11,868.00</span>
                    </div>
                </div>
                <div className='grid grid-cols-[1fr,1fr] py-1 px-2'>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-medium'>Order Tax</span>
                            <FontAwesomeIcon className='ml-2 text-[#457da4]' icon={faEdit} />
                        </div>
                        <span className='pr-3 font-bold'>0.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-medium'>Discount</span>
                            <FontAwesomeIcon className='ml-2 text-[#457da4]' icon={faEdit} />
                        </div>
                        <span className='pl-3 font-bold'>(0.00) 0.00</span>
                    </div>
                </div>
                <div>
                    <div className='bg-[#262626] text-white flex justify-between py-1 px-2'>
                        <div>
                            <span className='font-bold'>Total Payable</span>
                            <FontAwesomeIcon className='ml-2 text-[#326aa0]' icon={faPlusSquare} />
                        </div>
                        <span className='font-bold'>11,868.00</span>
                    </div>
                    <div className='grid grid-cols-[1fr,1fr,1fr] text-white'>
                        <div className='bg-[#ff9200] text-center pt-1 pb-2'>
                            <span className=''>Suspend</span>
                        </div>
                        <div className='bg-[#51bbdb] text-center pt-1 pb-2'>
                            <span className=''>Order</span>
                        </div>
                        <div className='bg-[#02b100] text-center pt-1 pb-2 row-span-2 flex justify-center items-center'>
                            <FontAwesomeIcon className='mr-2' icon={faMoneyBillAlt} />
                            <span className=''>Payment</span>
                        </div>
                        <div className='bg-[#e14541] text-center pt-1 pb-2'>
                            <span className=''>Cancel</span>
                        </div>
                        <div className='bg-[#4188cf] text-center pt-1 pb-2'>
                            <span className=''>Bill</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;