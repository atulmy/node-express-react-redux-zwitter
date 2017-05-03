// Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// App Imports
import Layout from './components/layout'
import UserLogin from './components/user/login';
import UserRegister from './components/user/register';
import Tweets from './components/tweets';
import About from './components/about';
import Tweet from './components/tweet';
import PageNotFound from './components/page-not-found';

const App  = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={ Tweets } />
            <Route path="/about" component={ About } />
            <Route path="/tweet" component={ Tweet } />
            <Route path="/user/login" component={ UserLogin } />
            <Route path="/user/register" component={ UserRegister } />
            <Route component={ PageNotFound }/>
        </Switch>
    </Layout>
);

export default App;
