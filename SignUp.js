/**
This page is the front end for the Sign Up view
*/

import React from 'react';
import ReactDOM from 'react-dom';
// importing the MUIThemeProvider from material ui library
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// importing the components from material ui
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton } from 'material-ui';
// import the routing
import { HashLink as Link } from 'react-router-hash-link';

// Styling for SignUp page
const styles = {
    paper: {
        margin: 20,
        padding: 40,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        width: '40%',
    },
    submitBtn: {
        marginTop: 40,
    }
};

export default class SignUp extends React.Component{
  render(){
    return (
    <div>
        <MuiThemeProvider>
            {/* Navbar*/}
            <Toolbar>
            <ToolbarGroup firstChild={true}>
                <Link to="/"><FlatButton label="Career Website" primary={true} /></Link>
            </ToolbarGroup>
            {/* routing for the NavBar*/}
            <ToolbarGroup lastChild={true}>
                <Link to="/create-internship"><FlatButton label="Post" /></Link>
                <Link to="/signup"><FlatButton label="Sign Up"  /></Link>
                <Link to="/signin"><FlatButton label="Sign In" /></Link>
            </ToolbarGroup>
            </Toolbar>
        </MuiThemeProvider>

        <MuiThemeProvider>
            {/* Sign Up form */}
            <Paper style={styles.paper} zDepth={1}>
                <h1>Sign Up</h1>
                <TextField floatingLabelText="Email" style={styles.textField} />
                <TextField floatingLabelText="Password" type="password" style={styles.textField} />

                <RaisedButton label="Submit" primary={true} style={styles.submitBtn} />
            </Paper>
        </MuiThemeProvider>
    </div>
  )}
}