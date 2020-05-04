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
        data: undefined,
        form: {

        },

    };

    componentDidMount() {

        this.fetchInfo()
    }

    fetchInfo = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId)

            this.setState({ loading: false, form: data })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {

        if (e.target.name === "email") {
            const avatarHash = hashGravatar(e.target.value)
            this.setState({
                form: {
                    ...this.state.form,
                    avatarUrl: avatarHash,
                    [e.target.name]: e.target.value
                }
            })
        }
        else {
            this.setState({

                form: {

                    ...this.state.form,
                    [e.target.name]: e.target.value,

                }

            })

        }

    }


    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.state.form.id, this.state.form)
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

        return (

            <div className="BadgeNew__container">

                <div className="container">
                    <div className="row  BadgeNew__new-container ">
                        <div className=" col-12 col-lg-6 ">
                            <Badge
                                firstName={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_name'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job_title'}
                                email={this.state.form.email || 'email'}
                                avatarUrl={this.state.form.avatarUrl || 'https://www.gravatar.com/avatar/5a91e01b09f18213bcbba7413056afd0?d=identicon'}

                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <BadgeForm
                                title={'Edit Badge'}
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