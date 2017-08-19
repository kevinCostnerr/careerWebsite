import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
import {HashRouter, Route} from 'react-router-dom';
import About from './About';
import App from './App';

ReactDOM.render(
    <HashRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </HashRouter>,
    document.getElementById('app')
);
