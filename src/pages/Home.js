import React from 'react';
import Image from '../images/undraw_doctors_hwty.svg';
import Logo from '../images/undraw_medicine_b1ol.svg';
import './styles/Home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {


    render() {

        return (

            <>
                <div className="Home__container">
                    <div >
                        <img src={Logo} alt="Logo" className="Home__logo" />
                        <h2 className="Home__title">#HealthConf 2020</h2>
                        <h6 className="Home__subtitle"> Print your badge, the easiest way to manage your conference</h6>
                        <div className="Home__btn-container">
                            <Link to="/badges">  <button className="btn  btn-primary" >Start Now!</button> </Link>
                        </div>
                    </div>

                    <div>
                        <img src={Image} alt="img" className="Home__img" />
                    </div>


                </div>
            </>

        )

    }

}

export default Home; 