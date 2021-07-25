
import React from 'react'
import GridRight from './GridRight';
import GridCenter from "./GridCenter"
import GridLeft from "./GridLeft"
import { Grid } from '@material-ui/core';


export default function Menu() {


    return (
        <div className="main-menu" >
            <div className="menu_1">
                <div className="menu-right">
                    <GridRight />
                </div>
                <div className="menu-left">
                    <GridLeft />
                </div>
            </div>


            <GridCenter className="menu_2" />




        </div >
    )
}
