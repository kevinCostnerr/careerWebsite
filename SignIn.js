/**
 * View file for Sign in page.
 * Provides Navbar and Sign in form.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Import Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton } from 'material-ui';

// Import for routing
import { HashLink as Link } from 'react-router-hash-link';

// Styling for Sign In page
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

// String values
const pageTitle = "Sign In";

// Contains all View components for Sign In page.
export default class SignIn extends React.Component{
  render(){
    return (
        <div>
            {/* Navbar */}
            <MuiThemeProvider>
                <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <Link to="/"><FlatButton label="Career Website" primary={true} /></Link>
                </ToolbarGroup>
                {/* Routing Links for Navbar */}
                <ToolbarGroup lastChild={true}>
                    <Link to="/create-internship"><FlatButton label="Post" /></Link>
                    <Link to="/signup"><FlatButton label="Sign Up"  /></Link>
                    <Link to="/signin"><FlatButton label="Sign In" /></Link>
                </ToolbarGroup>
                </Toolbar>
            </MuiThemeProvider>
            {/* End of Navbar */}

            {/* Sign In Form */}
            <MuiThemeProvider>
                <Paper style={styles.paper} zDepth={1}>
                    <h1>{pageTitle}</h1>
                    <TextField floatingLabelText="Email" style={styles.textField} />
                    <TextField floatingLabelText="Password" type="password" style={styles.textField} />
                    <RaisedButton label="Submit" primary={true} style={styles.submitBtn} />
                </Paper>
            </MuiThemeProvider>
            {/* End of Sign In Form */}
        </div>
  )}
}