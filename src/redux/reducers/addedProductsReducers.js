import { ADD_TO_INVOICE, DELETE_PRODUCT } from "../actions/addedProductsActions";

const initailState = {
    invoiceProducts: []
};

const addedProductsReducers = (state = initailState, { type, payload }) => {
    const { invoiceProducts } = state;
    switch (type) {
        case ADD_TO_INVOICE:
            // Redux expects that your reducers will update their state “immutably”, which effectively means always making copies of your data, and applying your changes to the copies. If you return the same object from a reducer, Redux assumes that nothing has been changed, even if you made changes
            const tempArray = [...invoiceProducts];
            tempArray.push(payload);
            return {
                ...state,
                invoiceProducts: tempArray
            };
        case DELETE_PRODUCT:
            const arraytemporary = [...invoiceProducts];
            const newArray = arraytemporary.filter(product => product.id !== payload)
            console.log(arraytemporary);
            return {
                ...state,
                invoiceProducts: newArray
            }
        default: return state;
    }
}

export default addedProductsReducers;