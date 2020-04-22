import React from 'react';
import './styles/BadgeForm.css'
class BadgeForm extends React.Component {

    state = {};

    handleClick = e => {
        console.log(
            "btn was clicked"
        );

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("form was submited");

    }
    render() {

        return (

            <div className="BadgeForm__container">
                <h1 className="BadgeForm__title">New Attendant</h1>
                <form onSubmit={this.handleSubmit} >

                    <div className="form-group BadgeForm__input">
                        <label >First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
                    </div>

                    <div className="form-group BadgeForm__input">
                        <label >Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.state.lastName} />
                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.state.email} />
                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle} />
                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.state.twitter} />
                    </div>


                    <button onClick={this.handleClick} className=" btn btn-primary BadgeForm__btn"> Save</button>
                </form>
            </div>


        )

    }

}

export default BadgeForm; 