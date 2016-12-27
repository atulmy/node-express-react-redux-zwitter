// Imports
import React, { Component } from 'react';
import { Link, Match, Miss } from 'react-router';
import { connect } from 'react-redux';

// UI Imports
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// App Imports
import UserLogin from './components/user/login';
import UserRegister from './components/user/register';
import UserButtonLogin from './components/user/button/login';
import UserButtonLogged from './components/user/button/logged';
import Tweets from './components/tweets';
import About from './components/about';
import Tweet from './components/tweet';
import PageNotFound from './components/page-not-found';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleDrawerToggle = () => this.setState({open: !this.state.open});

    render() {
        const { isAuthenticated } = this.props.user;

        return (
            <div>
                <AppBar
                    title="Zwitter"
                    onLeftIconButtonTouchTap={ this.handleDrawerToggle }
                    iconElementRight={isAuthenticated ? <UserButtonLogged /> : <UserButtonLogin />}
                />

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Link to="/"><MenuItem onTouchTap={this.handleDrawerToggle}>Home</MenuItem></Link>
                    <Link to="/about"><MenuItem onTouchTap={this.handleDrawerToggle}>About</MenuItem></Link>
                    <Link to="/tweet"><MenuItem onTouchTap={this.handleDrawerToggle}>Tweet</MenuItem></Link>
                    <MenuItem>&copy; 2016 Zwitter</MenuItem>
                </Drawer>

                <Match pattern="/" component={ Tweets } exactly />
                <Match pattern="/about" component={ About } />
                <Match pattern="/tweet" component={ Tweet } />
                <Match pattern="/user/login" component={ UserLogin } />
                <Match pattern="/user/register" component={ UserRegister } />

                <Miss component={ PageNotFound }/>
            </div>
        );
    }
}

App.propTypes = {
    user: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(App);
