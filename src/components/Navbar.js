import React from 'react';
import logo from '../images/logo2.png'
import './styles/Navbar.css'

class Navbar extends React.Component {

    render() {

        return (

            <div className="Navbar">
                <a href="/">

                    <img src={logo} alt="" />
                    <span className="font-weight-light"> Salud</span>
                    <span className="font-weight-bold">Conf</span>
                </a>
            </div>


        )

    }

}

export default Navbar; 