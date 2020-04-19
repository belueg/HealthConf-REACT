import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/logo2.png';

class Badge extends React.Component {

    render() {
        return (
            <div className="Badge">

                <div className="Badge__header">
                    <img src={confLogo} alt="logo" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" width="100" height="100" src={this.props.avatarURL} alt="Avatar" />
                    <h1> {this.props.firstName} <br />
                        {this.props.lastName}</h1>

                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobName}</h3>
                    <span>@{this.props.twitter}</span>

                </div>

                <div className="Badge__footer">

                    <div> #Saludconf </div>
                </div>

            </div>



        )

    }

}

export default Badge; 