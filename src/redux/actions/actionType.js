
import * as API from "../../axios/axios"
import axios from "axios"
import * as ActionType from "../contants/contants"
export const createAction = ({ type, payLoad }) => {
    return {
        type,
        payLoad,
    }
}
export const actGetListProduct = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                url: "https://nike0403.herokuapp.com/product",
                method: "GET",
            }

            );
            dispatch(
                createAction({
                    type: ActionType.GET_LIST_PRODUCT,
                    payLoad: res.data,

                })
            );
            console.log(res.data);
        } catch (er) {
            console.log({ ...er });
        }
    }
}
