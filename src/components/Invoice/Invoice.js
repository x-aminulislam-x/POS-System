import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Invoice = () => {

    const edit = <FontAwesomeIcon icon={faEdit} />


    return (
        <div className='bg-[#f4f4f4] flex flex-col justify-between rounded-sm p-3'>
            <div>
                Walk in Customer
            </div>
            <div>
                <div className='grid grid-cols-[1fr,1fr] py-1 px-2'>
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
                            <span className='ml-2'>{edit}</span>
                        </div>
                        <span className='pr-3 font-bold'>0.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-medium'>Discount</span>
                            <span>{edit}</span>
                        </div>
                        <span className='pl-3 font-bold'>(0.00) 0.00</span>
                    </div>
                </div>
                <div>
                    <div className='bg-black text-white flex justify-between py-1 px-2'>
                        <div>
                            <span className='font-bold'>Total Payable</span>
                        </div>
                        <span className='font-bold'>11,868.00</span>
                    </div>
                    <div>
                        <span>Suspend</span>
                    </div>
                    <div>
                        <span>Order</span>
                    </div>
                    <div>
                        <span>Payment</span>
                    </div>
                    <div>
                        <span>Cancel</span>
                    </div>
                    <div>
                        <span>Bill</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;