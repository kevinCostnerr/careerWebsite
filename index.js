import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import SignUp from './SignUp';
import SignIn from './SignIn';
import CreateJobPost from './CreateJobPost';

ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/create-internship" component={CreateJobPost} />
      </div>
    </HashRouter>,
    document.getElementById('app')
);
