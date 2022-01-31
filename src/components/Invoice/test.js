import { faComment, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/addedProductsActions';

const Test = ({ product, index }) => {

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    return (
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
                <input type="number" defaultValue={quantity} onChange={(e) => setQuantity(e.target.value)} className='quantity-input w-16 text-center' />
            </td>
            <td>
                {

                    // if(product.id == index + 1){
                    //     product.price * quantity
                    // }
                    // (product.id == index + 1) ? product.price * quantity : product.price

                    product.price * quantity
                }
            </td>
            <td>
                <FontAwesomeIcon onClick={() => dispatch(deleteProduct(product.id))} className='cursor-pointer' icon={faTimes} />
            </td>
        </tr>
    );
};

export default Test;