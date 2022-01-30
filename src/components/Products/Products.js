import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToInvoice } from '../../redux/actions/addedProductsActions';

const Products = () => {

    // getting products list from redux reducer
    const productsList = useSelector(state => state.productsList.products);

    // using redux useDispatch hook for dispatching the actions
    const dispatch = useDispatch();

    return (
        <div className='bg-[#f4f4f4] rounded-sm p-3 flex flex-col justify-between'>

            {/* products div */}

            <div className="products grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-1">

                {
                    // maping products array-object to avoid code repeation
                    productsList.map(product => (
                        <div onClick={() => dispatch(addToInvoice(product))} key={product.id} className='bg-white hover:bg-[#d7d7d7] border hover:border-[#7c7c7c] flex flex-col justify-between rounded-sm p-1 cursor-pointer'>
                            <img className='' src={product.img} alt="" />
                            {/* using string slice method to cut off products code from it's name string  */}
                            <span className='text-sm text-center font-medium'>{product.name.slice(6)}</span>
                        </div>
                    ))
                }

            </div>

            {/* end */}

            {/* product switching buttons */}

            <div className='grid grid-cols-[1fr,1fr,1fr] text-center text-white'>
                <div className='bg-[#84a8cd] hover:bg-[#75abe3] cursor-pointer p-1'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className='bg-[#3673b1] p-1'>
                    <FontAwesomeIcon className='mr-1' icon={faCreditCard} />
                    <span>Sell Gift Card</span>
                </div>
                <div className='bg-[#84a8cd] hover:bg-[#75abe3] cursor-pointer p-1'>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>

        </div>
    );
};

export default Products;