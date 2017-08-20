import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton, DatePicker, SelectField, MenuItem } from 'material-ui';
import { HashLink as Link } from 'react-router-hash-link';

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

export default class CreateJobPost extends React.Component{
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
            <Paper style={styles.paper} zDepth={1}>
                <h1>Post an Internship</h1>
                <TextField floatingLabelText="Title" floatingLabelFixed={true} style={styles.textField} />
                <TextField floatingLabelText="Location" floatingLabelFixed={true} style={styles.textField} />
                <div style={styles.textField}>
                    <DatePicker floatingLabelText="Closing Date" floatingLabelFixed={true} textFieldStyle={{width: '100%'}} />
                </div>
                <SelectField floatingLabelText="Contract Type" floatingLabelFixed={true} style={styles.textField}>
                    <MenuItem value={1} primaryText="Permanent" />
                    <MenuItem value={2} primaryText="Temporary" />
                </SelectField>
                <TextField floatingLabelText="Remuneration" floatingLabelFixed={true} style={styles.textField} />
                <TextField
                    floatingLabelText="Description"
                    floatingLabelFixed={true}
                    multiLine={true}
                    style={styles.textField}
                    rows={4}
                />
                <RaisedButton label="Submit" primary={true} style={styles.submitBtn} />
            </Paper>
        </MuiThemeProvider>
    </div>
  )}
}