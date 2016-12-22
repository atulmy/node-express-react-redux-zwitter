// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App Imports
import { postTweet } from '../actions/tweets';

class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            isLoading: false,
            error: '',
            message: ''
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
                this.setState({ isLoading: false, message: 'Tweet has been posted.', text: '', error: '' });
            });
        } else {
            this.setState({ isLoading: false, error: 'Tweet cannot be empty.', message: '' });
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

                { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }

                { this.state.message ? <p className="alert alert-success">{ this.state.message }</p> : '' }

                <form id="form-tweet" onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            id="text"
                            name="text"
                            value={ this.state.text }
                            placeholder="What's happening?"
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </section>
        )
    }
}

Tweet.propTypes = {
    postTweet: React.PropTypes.func.isRequired
};

export default connect(null, { postTweet })(Tweet);