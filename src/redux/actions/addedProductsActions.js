export const ADD_TO_INVOICE = "ADD_TO_INVOICE";
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export const addToInvoice = (payload) => {
    return {
        type: ADD_TO_INVOICE,
        payload
    }
};

export const deleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    }
};