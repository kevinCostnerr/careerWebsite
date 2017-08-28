/**
 * View file for main page
 * Provides Navbar and components for main page
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Import Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, Avatar } from 'material-ui';

// Import for Routing
import { HashLink as Link } from 'react-router-hash-link';

// Style for app.js
const styles = {
    form: {
        margin: 40,
        padding: 40,
        textAlign: 'center'
    },
    picture: {
        height: 150,
        width: 150,
        margin: 20,
    }
};

const welcomeText = "Welcome to Career Website";
const headerText = "We help you find the right internship opportunities";

export default class App extends React.Component{
  render(){
    return (
    <div>
      {/* Navbar */}
      <MuiThemeProvider>
        <Toolbar>
          {/* Label for the navbar */}
          <ToolbarGroup firstChild={true}>
            <Link to="/">
              <FlatButton label="Career Website" primary={true} />
            </Link>
          </ToolbarGroup>
          {/* Routing Links for Navbar */}
          <ToolbarGroup lastChild={true}>
            <Link to="/create-internship"><FlatButton label="Post" /></Link>
            <Link to="/signup"><FlatButton label="Sign Up" /></Link>
            <Link to="/signin"><FlatButton label="Sign In" /></Link>
          </ToolbarGroup>
          {/* End of front-end routing */}
        </Toolbar>
      </MuiThemeProvider>
      {/* End of the navbar */}

      {/* Header */}
      <MuiThemeProvider>
        <Paper style={styles.form} zDepth={1}>
          <h1>
            {welcomeText}
          </h1>
          <img src="Images/collaboration.png" style={styles.picture} />
          <p>
            {headerText}
          </p>
          <FlatButton label="Find Internships" primary={true} />
          <FlatButton label="CW For Employers" secondary={true} />
        </Paper>
      </MuiThemeProvider>
      {/* End of the header */}
    </div>
  )}
}
