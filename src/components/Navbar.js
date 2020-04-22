import React from 'react';
import logo from '../images/undraw_medicine_b1ol.svg'
import './styles/Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    render() {

        return (

            <div className="Navbar">
                <Link to="/">

                    <img src={logo} alt="logo" className="Navbar__logo" />
                    <span className="font-weight-light"> Health</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
            </div>


        )

    }

}

export default Navbar; 