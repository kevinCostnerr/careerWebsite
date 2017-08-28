/* Import front-end root components */
import React from 'react';
import ReactDOM from 'react-dom';

/* Import a front-end router to link one page to another page */
import { Link } from 'react-router'
import { HashRouter, Route } from 'react-router-dom';

/* Import every page component */
import App from './App';
import signUp from './signup';
import signIn from './signin';
import createJobPost from './createjobpost';

/* routing using react-router */
ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={app} />
        <Route path="/signup" component={signup} />
        <Route path="/signin" component={signin} />
        <Route path="/create-internship" component={createjobpost} />
      </div>
    </HashRouter>,
    document.getElementById('app')
);
