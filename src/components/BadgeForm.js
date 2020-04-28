import React from 'react';
import './styles/BadgeForm.css'
class BadgeForm extends React.Component {

    state = {};

    render() {

        return (

            <div className="BadgeForm__container">
                <h1 className="BadgeForm__title">{this.props.title}</h1>
                <form onSubmit={this.props.onSubmit} >

                    <div className="form-group BadgeForm__input">
                        <label >First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}

                        />
                    </div>

                    <div className="form-group BadgeForm__input">
                        <label >Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName} />

                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email} />

                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle} />

                    </div>

                    <div className="form-group  BadgeForm__input">
                        <label >Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter} />

                    </div>


                    <button onClick={this.handleClick} className=" btn btn-primary BadgeForm__btn"> Save</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}

                </form>
            </div>


        )

    }

}

export default BadgeForm; 