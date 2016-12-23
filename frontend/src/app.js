// Imports
import React, { Component } from 'react';
import { Link, Match, Miss } from 'react-router';

// UI Imports
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// App Imports
import Tweets from './components/tweets';
import About from './components/about';
import Tweet from './components/tweet';
import PageNotFound from './components/page-not-found';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleDrawerToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="Zwitter"
                    onLeftIconButtonTouchTap={ this.handleDrawerToggle }
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

                <Miss component={ PageNotFound }/>
            </div>
        );
    }
}

export default App;
