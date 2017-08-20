import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle } from 'material-ui';
import { HashLink as Link } from 'react-router-hash-link';

export default class App extends React.Component{
  render(){
    return (
    <div>
      <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Career Website" />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <Link to="/signup"><FlatButton label="Sign Up"  /></Link>
            <Link to="/signin"><FlatButton label="Sign In" /></Link>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    </div>
  )}
}
