import React from 'react';
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
import api from '../Api'
import hashGravatar from '../components/hashGravatar'
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            avatarUrl: "",
        },

    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async (e) => {
        this.setState({ loading: true, error: null })


        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, form: data })

        } catch (error) {

            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {
        this.setState({

            form: {

                ...this.state.form,
                [e.target.name]: e.target.value,

            }
        })

        if (e.target.name === "email") {
            this.setState({
                form: {
                    ...this.state.form,
                    avatarUrl: hashGravatar(e.target.value)
                }
            })

        }


    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }


    }

    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        return (

            <div className="BadgeNew__container">

                <div className="container">
                    <div className="row  ">
                        <div className="col-6 ">
                            <Badge
                                firstName={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_name'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job_title'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl={this.state.form.avatarUrl || 'https://www.gravatar.com/avatar/5a91e01b09f18213bcbba7413056afd0?d=identicon'}

                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                title={'Edit User'}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}

                            />
                        </div>
                    </div>

                </div>




            </div>


        )
    }
}



export default BadgeEdit; 