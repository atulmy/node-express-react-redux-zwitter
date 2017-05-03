// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// UI Imports
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import { blue500, red500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';

// App Imports
import { postTweet } from '../actions/tweets';
import AuthRedirect from './user/auth-redirect';

class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            isLoading: false,
            error: '',
            notification: false,
            viewTweet: false
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-tweet');

        this.setState({ isLoading: true });

        let input = {};
        input.text = this.state.text;

        if(input.text !=='') {
            this.props.postTweet(input).then((response) => {
                if(response.success) {
                    this.setState({ isLoading: false, notification: true, text: '', error: '' });
                } else {
                    this.setState({ isLoading: false, error: response.errors[0].message });
                }
            });
        } else {
            this.setState({ isLoading: false, error: 'Tweet cannot be empty.', notification: false });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <section>
                <h2>Tweet to the world</h2>

                <br/>

                { this.state.error ? <Card><CardText color={ red500 }>{ this.state.error }</CardText></Card> : '' }

                { this.state.message ? <Card><CardText color={ blue500 }>{ this.state.message }</CardText></Card> : '' }

                <form id="form-tweet" onSubmit={ this.onSubmit.bind(this) }>
                    <TextField
                        name="text"
                        value={ this.state.text }
                        onChange={ this.onChange.bind(this) }
                        floatingLabelText="What's happening?"
                        multiLine={ true }
                        rows={1}
                        fullWidth={ true }
                    />

                    <br/>

                    <RaisedButton label="Submit" type="submit" backgroundColor={ blue500 } labelColor="white" />
                </form>

                <Snackbar
                    open={this.state.notification}
                    message="Tweet has been posted"
                    autoHideDuration={4000}
                    action="View Tweet"
                    onActionTouchTap={ () => ( this.setState({ viewTweet: true }) ) }
                />

                { this.state.viewTweet ? <Redirect to="/" /> : '' }

                <AuthRedirect />
            </section>
        )
    }
}

Tweet.propTypes = {
    postTweet: React.PropTypes.func.isRequired
};

export default connect(null, { postTweet })(Tweet);