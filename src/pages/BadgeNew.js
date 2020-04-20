import React from 'react';
import header from '../images/logo2.png'
import Navbar from '../components/Navbar'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
class BadgeNew extends React.Component {

  state = { form: {} };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    })
  }

  render() {

    return (

      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>

        <div className="container ">
          <div className="row  ">
            <div className="col-6 ">
              <Badge firstName="Belén" lastName="González" twitter="belueg" jobName="Guest" avatarURL="https://www.gravatar.com/avatar?d=identicon" />

            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>

        </div>




      </div>


    )

  }

}

export default BadgeNew; 