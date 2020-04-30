import React from 'react';
import Badge from '../components/Badge';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function BadgeDetails(props) {

    return (
        <div className="BadgeNew__container">

            <div className="container">
                <div className="row  ">
                    <div className="col-6 ">
                        <Badge
                            firstName={props.firstName || 'First_Name'}
                            lastName={props.lastName || 'Last_name'}
                            twitter={props.twitter || 'twitter'}
                            jobTitle={props.jobTitle || 'Job_title'}
                            email={props.email || 'email'}
                            avatarUrl={props.avatarUrl || 'https://www.gravatar.com/avatar/5a91e01b09f18213bcbba7413056afd0?d=identicon'}

                        />
                    </div>
                    <div className="col-6">
                        <h2>Actions</h2>
                        <Link to={`${props.id}/edit/`} > <button className="btn btn-success">Edit</button> </Link>
                        <button className="btn btn-danger">Delete</button>
                        {
                            ReactDOM.createPortal(<h1>TEXTO DEL PORTALLL!!</h1>, document.getElementById("modal"))
                        }
                    </div>
                </div>

            </div>




        </div>
    )
}

export default BadgeDetails