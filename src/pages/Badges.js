import React from 'react';
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import { Link } from 'react-router-dom';
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }


    componentDidMount() {

        this.fetchData();


    }


    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {

            const fetchData = await fetch('https://techloveapi.herokuapp.com/api/users');
            const data = await fetchData.json();

            this.setState({ loading: false, data: data })

        }
        catch (error) {
            this.setState({ loading: false, error: error })

        }

    }

    render() {

        if (this.state.loading && this.state.data === undefined) {

            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (


            <div className="Badges__container" >

                <div className="Badges__container-badges">

                    <div className="Badges_buttons">

                        <Link to="/badges/new" className="btn btn-primary Badges__btn">
                            New Badge
                        </Link>

                    </div>
                    <div className="Badges__list">
                        <div>
                            <BadgesList badges={this.state.data} />
                        </div>

                        {this.state.loading && 'Loading...'}
                    </div>

                </div>
            </div>
        )
    }
}


export default Badges





