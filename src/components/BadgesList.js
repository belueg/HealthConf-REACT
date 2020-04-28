import React, { Component } from 'react';
import './styles/BadgesList.css';
import BadgesListItem from './BadgeListItem';
import { Link } from 'react-router-dom';

class BadgesList extends Component {


    render() {

        if (this.props.badges.length === 0) {

            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link to="/badges/new"> Create new Badge</Link>
                </div>
            )

        }
        return (
            <div className="BadgesList__container">
                <ul className="BadgesList__wrapper">
                    {
                        this.props.badges.map(badge =>
                            <li key={badge.id} >
                                <Link className="text-reset text-decoration-none" to={`badges/${badge.id}/edit`}>
                                    <BadgesListItem badge={badge} />
                                </Link>


                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default BadgesList;