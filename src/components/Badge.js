import React from 'react';
import "./styles/Badge.css";
// import hashGravatar from './hashGravatar'
import confLogo from '../images/undraw_medicine_b1ol.svg';

function Badge(props) {


    return (
        <div className="Badge">

            <div className="Badge__header">
                <img src={confLogo} alt="logo"
                    className="Badge__logo" />
            </div>

            <div className="Badge__section-name">
                <img src={props.avatarUrl} alt="Avatar" />
                <h1 > {props.firstName} <br />
                    {props.lastName}</h1>

            </div>

            <div className="Badge__section-info">
                <h3>{props.jobTitle}</h3>
                <span>@{props.twitter}</span>

            </div>

            <div className="Badge__footer">

                <div> #HealthConf </div>
            </div>

        </div>



    )

}



export default Badge; 