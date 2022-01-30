import canonImg from '../../assets/images/canon.png';
import computer1Img from '../../assets/images/computer_set1.png';
import computer2Img from '../../assets/images/computer_set2.png';
import hardDiskImg from '../../assets/images/harddisk.png';
import keyboardImg from '../../assets/images/keyboard.png';
import laptopImg from '../../assets/images/laptop.png';
import mouseImg from '../../assets/images/mouse.png';
import ramImg from '../../assets/images/ram.png';
import { PRODUCTS_LIST } from '../actions/productsActions';


const initailState = {
    products: [
        { id: 1, name: 'IT01 - Canon 1100d', img: canonImg, price: 2250, }, { id: 2, name: 'IT02 - Computer Set 1', img: computer1Img, price: 2250, },
        { id: 3, name: 'IT03 - Computer Set 2', img: computer2Img, price: 2250, }, { id: 4, name: 'IT04 - Hard Disk (500GiB)', img: hardDiskImg, price: 2250, },
        { id: 5, name: 'IT05 - Keyboard(Black)', img: keyboardImg, price: 2250, }, { id: 6, name: 'IT06 - Laptop', img: laptopImg, price: 2250, },
        { id: 7, name: 'IT07 - Mouse', img: mouseImg, price: 2250, }, { id: 8, name: 'IT08 - RAM (4GiB)', img: ramImg, price: 2250, },
    ],
}

const productsReducers = (state = initailState, { type, payload }) => {
    switch (type) {
        case PRODUCTS_LIST:
            return state; // returning only products list cuz nothing have to do with product list
        default: return state;
    }
}

export default productsReducers;