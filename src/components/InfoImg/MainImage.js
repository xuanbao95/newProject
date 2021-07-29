import React from 'react'
import * as action from "../../redux/actions/actionType"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";







export default function MainImage() {
    const history = useHistory();
    const data = useSelector((state) => state.productReducers.data);
    console.log(data);
    return (
        <React.Fragment>

        </React.Fragment>
    )
}
