// Imports
import React, { Component } from 'react';
import { Link, Match } from 'react-router';

// App Imports
import Tweets from './components/tweets';
import About from './components/about';
import Tweet from './components/tweet';

class App extends Component {
    render() {
        return (
            <section>
                <header>
                    <ul className="nav nav-pills">
                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/about">About</Link></li>

                        <li><Link to="/tweet">Tweet</Link></li>

                    </ul>
                </header>

                <hr/>

                <Match pattern="/" component={ Tweets } exactly />
                <Match pattern="/about" component={ About } />
                <Match pattern="/tweet" component={ Tweet } />

                <hr/>

                <footer>
                    &copy; 2016 Zwitter
                </footer>
            </section>
        );
    }
}

export default App;
