import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, Avatar } from 'material-ui';
import { HashLink as Link } from 'react-router-hash-link';

const style = {
  margin: 40,
  padding: 40,
  textAlign: 'center',
};

const picStyle = {
  height: 150,
  width: 150,
  margin: 20,
}

export default class App extends React.Component{
  render(){
    return (
    <div>
      <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <Link to="/"><FlatButton label="Career Website" primary={true} /></Link>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <Link to="/create-internship"><FlatButton label="Post" /></Link>
            <Link to="/signup"><FlatButton label="Sign Up"  /></Link>
            <Link to="/signin"><FlatButton label="Sign In" /></Link>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Paper style={style} zDepth={1}>
          <h1>Welcome to Career Website</h1>
          <img src="./Images/collaboration.png" style={picStyle} />
          <p>We help you find the right internship opportunities</p>
          <FlatButton label="Find Internships" primary={true} />
          <FlatButton label="CW For Employers" secondary={true} />
        </Paper>
      </MuiThemeProvider>
    </div>
  )}
}
