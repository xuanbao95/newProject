import * as ActionType from "../contants/contants"

const GenderAndTypeProduct = JSON.parse(localStorage.getItem("GenderAndTypeProduct"));
const inittialState = {
    gender: GenderAndTypeProduct?.gender,
    typeProduct: GenderAndTypeProduct?.typeProduct,
    isLoading: false,
    data: [],
}

const productReducer = (state = inittialState, { type, payload }) => {

    switch (type) {
        case ActionType.IS_LOADING_PRODUCT:
            state.isLoading = payload;
            console.log(payload);
            // state.typeProduct = payload.typeProduct;
            // state.gender = payload.gender;
            // localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ gender: state.gender, typeProduct: state.typeProduct }))
            break;
        case ActionType.GET_LIST_PRODUCT:
            state.data = payload;
            console.log(payload);
            // state.typeProduct = payload.typeProduct;
            // state.gender = payload.gender;
            break;
        default: break;

    }

    return { ...state }
}
export default productReducer;