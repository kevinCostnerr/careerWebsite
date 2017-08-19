import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { HashLink as Link } from 'react-router-hash-link';

const style = {
  margin: 12,
};

export default React.createClass({
  render(){
    return (
    <div>
      <MuiThemeProvider>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
        <h1>cyka blyat World</h1>
        <h2>cykaaaaaaaaaa asu</h2>
        <br />
        <MuiThemeProvider>
          <RaisedButton label="Sign Up" primary={true} style={style} />
        </MuiThemeProvider>
        <br />
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
    </div>
  )}
})
