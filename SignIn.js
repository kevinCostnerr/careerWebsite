import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton } from 'material-ui';
import { HashLink as Link } from 'react-router-hash-link';

const style = {
    margin: 20,
    padding: 40,
    textAlign: 'center',
    display: 'inline-block',
};

export default class SignIn extends React.Component{
  render(){
    return (
        <div>
            <MuiThemeProvider>
                <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <Link to="/"><FlatButton label="Career Website" primary={true} /></Link>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <Link to="/signup"><FlatButton label="Sign Up"  /></Link>
                    <Link to="/signin"><FlatButton label="Sign In" /></Link>
                </ToolbarGroup>
                </Toolbar>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <Paper style={style} zDepth={1}>
                    <h1>Sign In</h1>
                    <TextField floatingLabelText="Email" /><br />
                    <TextField floatingLabelText="Password" type="password" /><br /><br /><br />
                    <RaisedButton label="Submit" primary={true} />
                </Paper>
            </MuiThemeProvider>
        </div>
  )}
}