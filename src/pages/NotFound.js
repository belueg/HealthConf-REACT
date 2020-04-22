import React from 'react';
import Img from '../images/undraw_not_found_60pq.png';
import './styles/NotFound.css'

function NotFound() {
    return (

        <div className="NotFound__container">
            <div className="NotFound__img-container">
                <img src={Img} alt="Not found" className="NotFound__img" />
            </div>
            <br />
            <h3 className="NotFound__title">404:
We did't find what you were looking for</h3>


        </div>
    )

}

export default NotFound