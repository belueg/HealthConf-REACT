import React from 'react';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import { Link } from 'react-router-dom';
import './styles/BadgeNew.css'

function BadgeDetails(props) {


    return (
        <div className="BadgeNew__container">

            <div className="container ">
                <div className="row d-flex justify-content-center ">
                    <div className="col-12 col-md-6 ">
                        <Badge
                            firstName={props.badgeDetails.firstName || 'First_Name'}
                            lastName={props.badgeDetails.lastName || 'Last_name'}
                            twitter={props.badgeDetails.twitter || 'twitter'}
                            jobTitle={props.badgeDetails.jobTitle || 'Job_title'}
                            email={props.badgeDetails.email || 'email'}
                            avatarUrl={props.badgeDetails.avatarUrl || 'https://www.gravatar.com/avatar/5a91e01b09f18213bcbba7413056afd0?d=identicon'}

                        />
                    </div>
                    <div className="col-12 col-md-6 text-center pt-4 ">
                        <div className="BadgeDetails__items">
                            <h2 className="ml-4">Actions</h2>
                            <div>
                                <Link to={`${props.badgeDetails.id}/edit/`} >
                                    <button className="btn btn-success ml-4">Edit</button>
                                </Link>
                                <button
                                    onClick={props.openModal}
                                    className="btn btn-danger ml-2">
                                    Delete
                         </button></div>
                            <DeleteBadgeModal
                                closeMyModal={props.closeModal}
                                modalIsOpen={props.isOpen}
                                onDeleteBadge={props.deleteBadge}
                            />

                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default BadgeDetails