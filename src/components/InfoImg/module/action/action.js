import axios from "axios"
import * as API from "../../../../Axios/API"
import * as ActionType from "../contants/contants"
export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}

export const actGetListProductAPI = () => {
    return async (dispatch) => {
        try {
            dispatch(createAction({ type: ActionType.IS_LOADING_PRODUCT, payload: true }))
            // const res = await axios({
            //     url: "https://nike0403.herokuapp.com/product",
            //     method: "GET",
            // }

            // );
            const res = await API(
                `/product`,
                "GET"
            );


            console.log(res.data);
            dispatch(createAction({ type: ActionType.GET_LIST_PRODUCT, payload: res.data }))
            dispatch(createAction({ type: ActionType.IS_LOADING_PRODUCT, payload: false }))

        } catch (error) {
            console.log(Response.error);
        }
    }
}