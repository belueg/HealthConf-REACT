import React from 'react';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: ""
    }
  };

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

      <div className="BadgeNew__container">

        <div className="container">
          <div className="row  ">
            <div className="col-6 ">
              <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} avatarURL="https://www.gravatar.com/avatar?d=identicon" />

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