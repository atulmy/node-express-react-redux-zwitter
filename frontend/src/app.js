// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import Layout from './components/layout'
import TweetListContainer from './components/tweet/list-container'
import TweetAdd from './components/tweet/add'
import TweetViewContainer from './components/tweet/view-container'
import UserLogin from './components/user/login'
import UserRegister from './components/user/register'
import About from './components/about'
import PageNotFound from './components/page-not-found'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={TweetListContainer}/>
      <Route path="/tweet/add" component={TweetAdd}/>
      <Route path="/tweet/:tweetId" component={TweetViewContainer}/>
      <Route path="/user/login" component={UserLogin}/>
      <Route path="/user/register" component={UserRegister}/>
      <Route path="/about" component={About}/>
      <Route component={PageNotFound}/>
    </Switch>
  </Layout>
)

export default App
