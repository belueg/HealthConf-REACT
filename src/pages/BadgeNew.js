import React from 'react';
import header from '../images/logo2.png'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
class BadgeNew extends React.Component {

  render() {

    return (

      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>

        <div className="container ">
          <div className="row  ">
            <div className="col d-flex justify-content-center ">
              <Badge firstName="Belén" lastName="González" twitter="belueg" jobName="Guest" avatarURL="https://www.gravatar.com/avatar?d=identicon" />

            </div>
          </div>
        </div>


      </div>


    )

  }

}

export default BadgeNew; 