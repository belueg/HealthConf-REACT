import React from 'react';
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import { Link } from 'react-router-dom';
import api from '../Api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class Badges extends React.Component {
    //Constructor



    state = {
        loading: true,
        error: null,
        data: undefined
    }


    componentDidMount() {

        this.fetchData()

    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list();

            this.setState({ loading: false, data: data })

        }
        catch (error) {
            this.setState({ loading: false, error: error })

        }

    }

    render() {

        if (this.state.loading) {

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
                    </div>

                </div>
            </div>
        )
    }
}


export default Badges





