import React from 'react';
import "./styles/Badge.css";
import confLogo from '../images/undraw_medicine_b1ol.svg';

class Badge extends React.Component {

    render() {
        return (
            <div className="Badge">

                <div className="Badge__header">
                    <img src={confLogo} alt="logo" className="Badge__logo" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" width="100" height="100" src={this.props.avatarURL} alt="Avatar" />
                    <h1> {this.props.firstName} <br />
                        {this.props.lastName}</h1>

                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <span>@{this.props.twitter}</span>

                </div>

                <div className="Badge__footer">

                    <div> #HealthConf </div>
                </div>

            </div>



        )

    }

}

export default Badge; 