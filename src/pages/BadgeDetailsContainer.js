import React from 'react';
import api from '../Api';
import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading';
class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined


    };

    componentDidMount() {

        this.fetchInfo()
    }

    fetchInfo = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId)

            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return "Ha sucedido algún error"
        }
        return (
            <BadgeDetails />
        )
    }
}

export default BadgeDetailsContainer;