import React, { Component } from 'react';
import './styles/BadgesList.css';
import { IoLogoTwitter } from 'react-icons/io';


class BadgesListItem extends Component {



    render() {
        return (
            <div className="BadgesList__Item">
                <img src={this.props.badge.avatarUrl} alt="" />


                <div className="BadgesList__info">
                    <p>   {this.props.badge.firstName} {this.props.badge.lastName} </p>
                    <p> <IoLogoTwitter className="twitter" /> {this.props.badge.twitter}</p>
                    <p>{this.props.badge.jobTitle}</p> </div>
            </div>
        );
    }
}

export default BadgesListItem;






