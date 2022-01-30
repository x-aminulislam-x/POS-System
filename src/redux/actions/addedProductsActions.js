export const ADD_TO_INVOICE = "ADD_TO_INVOICE";


export const addToInvoice = (payload) => {
    return {
        type: ADD_TO_INVOICE,
        payload
    }
};