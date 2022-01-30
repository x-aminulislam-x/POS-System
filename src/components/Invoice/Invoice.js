import { faEdit, faEye, faMoneyBillAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faComment, faPencilAlt, faPlusCircle, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import './Invoice.css';


const Invoice = () => {

    // useing redux hook to access the state
    const addedProducts = useSelector(state => state.addedProducts.invoiceProducts);

    return (
        // outer div
        <div className='bg-[#f4f4f4] flex flex-col justify-between rounded-sm p-3'>

            {/* inner div */}
            <div className='grid'>

                {/* dropdown and other inputs  */}
                {/* invoice top part */}
                <div className='flex justify-between border border-[#bdb8b8]'>
                    <div className='w-4/5'>
                        <select name="customer-option flex justify-between pr-2" id="" style={{ width: '100%' }}>
                            <option value="">Walk-in Customer</option>
                            <option value="">Walk-in Customer</option>
                            <option value="">Walk-in Customer</option>
                        </select>
                    </div>
                    <div className='w-1/5 text-[#326aa0] flex justify-around items-center'>
                        <span className='border-l border-[#bdb8b8] px-1 cursor-pointer'>
                            <FontAwesomeIcon className='' icon={faPencilAlt} />
                        </span>
                        <span className='border-x border-[#bdb8b8] px-1 cursor-pointer'>
                            <FontAwesomeIcon className='' icon={faEye} />
                        </span>
                        <span className='px-1 cursor-pointer'>
                            <FontAwesomeIcon className='' icon={faPlusCircle} />
                        </span>
                    </div>
                </div>
                <div className='border border-[#bdb8b8] mt-1'>
                    <div className='w-full'>
                        <select name="customer-option flex justify-between" id="" style={{ width: '100%' }}>
                            <option value="">Walk-in Customer</option>
                            <option value="">Walk-in Customer</option>
                            <option value="">Walk-in Customer</option>
                        </select>
                    </div>
                </div>
                <div className='flex border border-[#bdb8b8] mt-1'>
                    <div className='' style={{ width: '94.4%' }}>
                        <input name="customer-input flex justify-between" id="" style={{ width: '100%', outlineColor: '#00a4ff', borderRadius: '0px' }} />
                    </div>
                    <div className='text-[#326aa0] flex justify-around items-center border-l border-[#bdb8b8]' style={{ width: '6.6%' }}>
                        <span className='px-1 cursor-pointer'>
                            <FontAwesomeIcon className='' icon={faPlusCircle} />
                        </span>
                    </div>
                </div>
                {/* end */}

                {/* invoice products table - invoice middle part */}
                <div className='mt-1'>
                    <table className="w-full text-center font-semibold text-sm">
                        <thead className='bg-[#457da4] text-white'>
                            <tr >
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Subtotal</th>
                                <th>
                                    <FontAwesomeIcon className='' icon={faTrashAlt} />
                                </th>
                            </tr>
                        </thead>
                        <tbody className='overflow-y-scroll'>

                            {
                                // added product array is maping to make a new row if any new product is added to the invoice
                                addedProducts.length === 0 ? <tr><span className='text-center'>No Product is Added</span></tr> : addedProducts.map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <span>{product.name}</span>
                                            <div>
                                                <FontAwesomeIcon className='' icon={faComment} />
                                                <FontAwesomeIcon className='' icon={faEdit} />
                                            </div>
                                        </td>
                                        <td>
                                            {product.price}
                                        </td>
                                        <td>
                                            <input type="number" defaultValue='1' className='quantity-input w-16 text-center' />
                                        </td>
                                        <td>
                                            {product.price}
                                        </td>
                                        <td>
                                            <FontAwesomeIcon className='cursor-pointer' icon={faTimes} />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                {/* end */}

            </div>

            {/* billing button and others interactivity for invoice products */}
            {/* invoice buttons - invoice end or bottom part */}
            <div>
                {/* total amount part */}
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
                {/* end */}

                {/* tax and discount part */}
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
                {/* end */}

                <div>
                    {/* total pay after adding tax and minus the discount amount */}
                    <div className='bg-[#262626] text-white flex justify-between py-1 px-2'>
                        <div>
                            <span className='font-bold'>Total Payable</span>
                            <FontAwesomeIcon className='ml-2 text-[#326aa0]' icon={faPlusSquare} />
                        </div>
                        <span className='font-bold'>11,868.00</span>
                    </div>
                    {/* end */}

                    {/* all buttons */}
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
                    {/* end */}
                </div>
            </div>
            {/* end */}

        </div >
    );
};

export default Invoice;
