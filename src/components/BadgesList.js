import React, { Component } from 'react';
import './styles/BadgesList.css';
import { IoLogoTwitter } from 'react-icons/io';

class BadgesList extends Component {
    render() {
        return (
            <div className="BadgesList__container">
                <ul className="BadgesList__wrapper">

                    {
                        this.props.badges.map((badge) =>
                            <li key={badge.id} className="BadgesList__Item">
                                <div className="BadgesList__container-img">
                                    <img src={badge.avatarUrl} className="BadgesList__img" alt="avatar" />
                                </div>

                                <div className="BadgesList__info"> <p>   {badge.firstName} {badge.lastName} </p>
                                    <p> <IoLogoTwitter className="twitter" /> {badge.twitter}</p>
                                    <p>{badge.jobTitle}</p> </div>

                            </li>)
                    }
                </ul>            </div>
        );
    }
}

export default BadgesList;