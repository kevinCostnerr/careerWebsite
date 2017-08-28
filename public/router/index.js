// Import front-end root components
import React from 'react';
import ReactDOM from 'react-dom';

// Import a front-end router to link one page to another page
import { browserHistory } from 'react-router'
//import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import every page component
import App from '../App';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import CreateJobPost from '../CreateJobPost';

/* This is the front-end routing for directing to each page */
ReactDOM.render(
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/create-internship" component={CreateJobPost} />
      </div>
    </Router>,
    document.getElementById('app')
);
