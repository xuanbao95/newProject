import * as action from "../contants/contants"


let initialState = {
    data: [],
}

const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case action.GET_LIST_PRODUCT:
            state.data = payload;
            break;
        default: break;

    }
    return { ...state };
}
export default productReducers;