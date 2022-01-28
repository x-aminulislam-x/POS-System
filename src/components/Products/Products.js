import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import canonImg from '../../assets/images/canon.png';
import computer1Img from '../../assets/images/computer_set1.png';
import computer2Img from '../../assets/images/computer_set2.png';
import hardDiskImg from '../../assets/images/harddisk.png';
import keyboardImg from '../../assets/images/keyboard.png';
import laptopImg from '../../assets/images/laptop.png';
import mouseImg from '../../assets/images/mouse.png';
import ramImg from '../../assets/images/ram.png';

const Products = () => {

    // font-awsome icons
    const angleRight = <FontAwesomeIcon icon={faAngleRight} />
    const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const creditCard = <FontAwesomeIcon icon={faCreditCard} />


    return (
        <div className='bg-[#f4f4f4] rounded-sm p-3 flex flex-col justify-between'>

            {/* products div */}

            <div className="products grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-1">
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img className='' src={canonImg} alt="" />
                    <span className='text-sm text-center font-medium'>CANON 1100D</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={computer1Img} alt="" />
                    <span className='text-sm text-center font-medium'>COMPUTER SET 1</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={computer2Img} alt="" />
                    <span className='text-sm text-center font-medium'>COMPUTER SET 2</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img className='h-20 w-20' src={hardDiskImg} alt="" />
                    <span className='text-sm text-center font-medium'>HARD DISK</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={keyboardImg} alt="" />
                    <span className='text-sm text-center font-medium'>KEYBOARD</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={laptopImg} alt="" />
                    <span className='text-sm text-center font-medium'>LAPTOP</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={mouseImg} alt="" />
                    <span className='text-sm text-center font-medium'>MOUSE</span>
                </div>
                <div className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                    <img src={ramImg} alt="" />
                    <span className='text-sm text-center font-medium'>RAM</span>
                </div>
            </div>

            {/* end */}

            {/* product switching buttons */}

            <div className='grid grid-cols-[1fr,1fr,1fr] text-center text-white'>
                <div className='bg-[#84a8cd] hover:bg-[#75abe3] cursor-pointer p-1'>
                    <span>{angleLeft}</span>
                </div>
                <div className='bg-[#3673b1] p-1'>
                    <span className='mr-1'>{creditCard}</span>
                    <span>Sell Gift Card</span>
                </div>
                <div className='bg-[#84a8cd] hover:bg-[#75abe3] cursor-pointer p-1'>
                    <span>{angleRight}</span>
                </div>
            </div>

        </div>
    );
};

export default Products;