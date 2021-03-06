import React from 'react';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
import hashGravatar from '../components/hashGravatar'
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
  state = {

    form: {
      avatarUrl: "",
    },

  };

  handleChange = e => {
    this.setState({

      form: {

        ...this.state.form,
        [e.target.name]: e.target.value,

      }
    })

    if (e.target.name === "email") {
      this.setState({
        form: {
          ...this.state.form,
          avatarUrl: hashGravatar(e.target.value)
        }
      })

    }

  }

  handleSubmit = async e => {
    e.preventDefault();
    const user = this.state.form;
    this.setState({ loading: true, error: null })

    try {
      await fetch('https://techloveapi.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      this.setState({ loading: false, error: null })
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }



  }

  render() {

    if (this.state.loading) {
      return <PageLoading />
    }

    return (

      <div className="BadgeNew__container">

        <div className="container ">
          <div className="row  BadgeNew__new-container">
            <div className="col-12 col-lg-6 ">
              <Badge
                firstName={this.state.form.firstName || 'First_Name'}
                lastName={this.state.form.lastName || 'Last_name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job_title'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl={this.state.form.avatarUrl || 'https://www.gravatar.com/avatar/5a91e01b09f18213bcbba7413056afd0?d=identicon'}

              />
            </div>
            <div className="col-12 col-lg-6 BadgeForm__form-container">
              <BadgeForm
                title={'New Attendant'}
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}

              />
            </div>
          </div>

        </div>




      </div>


    )
  }
}



export default BadgeNew; 