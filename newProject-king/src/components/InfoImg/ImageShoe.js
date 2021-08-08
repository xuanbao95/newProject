import React from 'react'
import * as ActionType from "./module/contants/contants"
import * as action from "./module/action/action"
import { useDispatch, useSelector } from "react-redux";
import API from "../../Axios/API"
export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}
export default function ImageShoe(props) {

    const dispatch = useDispatch();

    const gender = useSelector((state) => state.productReducers.gender);
    const typeProduct = useSelector((state) => state.productReducers.typeProduct);
    console.log(typeProduct);
    React.useEffect(() => {
        dispatch(action.actGetListProductAPI())
    }, [])

    const data = useSelector((state) => state.productReducers.data);

    return (
        <div>
            123
        </div>
    )
}
