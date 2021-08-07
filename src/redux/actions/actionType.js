
import * as API from "../../Axios/API"
import axios from "axios"
import * as ActionType from "../contants/contants"
export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
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
                    payload: res.data,
                })
            );

            console.log(res.data);
        } catch (er) {
            console.log({ ...er });
        }
    }
}
