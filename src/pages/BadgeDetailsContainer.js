import React from 'react';
import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,

    };

    componentDidMount() {

        this.fetchInfo()
    }

    fetchInfo = async () => {
        this.setState({ loading: true, error: null })

        try {

            // api.badges.read(
            //     this.props.match.params.badgeId)
            const fetchData = await fetch(`https://techloveapi.herokuapp.com/api/users/${this.props.match.params.badgeId}`);
            const data = await fetchData.json();

            this.setState({ loading: false, data: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleOpenModal = (e) => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = (e) => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBadge = async (e) => {
        this.setState({ loading: true, error: null })

        try {
            // api.badges.remove(this.props.match.params.badgeId)
            await fetch(`https://techloveapi.herokuapp.com/api/users/${this.props.match.params.badgeId}`, {
                method: 'DELETE'
            })
            this.setState({ loading: false, error: null })
            this.props.history.push('/badges')
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
            <BadgeDetails
                badgeDetails={this.state.data}
                isOpen={this.state.modalIsOpen}
                openModal={this.handleOpenModal}
                closeModal={this.handleCloseModal}
                deleteBadge={this.handleDeleteBadge}
            />
        )
    }
}
export default BadgeDetailsContainer;