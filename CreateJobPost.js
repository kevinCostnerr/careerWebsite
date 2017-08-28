/**
 * View file for Create Job Post page.
 * Provides Navbar and Create Job Post Form.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*  Import Material UI*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton, DatePicker, SelectField, MenuItem } from 'material-ui';

/* Import for routing */
import { HashLink as Link } from 'react-router-hash-link';

/* Styling for Create Job Post page */
const styles = {
    form: {
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
    },
    datePicker: {
        width: '100%',
    }
};

/* String values */
const pageTitle = "Post an Internship";

/* Contains all View components displayed in Create Job Post page */
export default class CreateJobPost extends React.Component{
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

            {/* Create Job Post Form */}
            <MuiThemeProvider>
                <Paper style={styles.form} zDepth={1}>
                    <h1>{pageTitle}</h1>
                    <TextField floatingLabelText="Title" floatingLabelFixed={true} style={styles.textField} />
                    <TextField floatingLabelText="Location" floatingLabelFixed={true} style={styles.textField} />
                    <div style={styles.textField}>
                        <DatePicker floatingLabelText="Closing Date" floatingLabelFixed={true} textFieldStyle={styles.datePicker} />
                    </div>
                    <SelectField floatingLabelText="Contract Type" floatingLabelFixed={true} style={styles.textField}>
                        <MenuItem value={1} primaryText="Permanent" />
                        <MenuItem value={2} primaryText="Temporary" />
                    </SelectField>
                    <TextField floatingLabelText="Remuneration" floatingLabelFixed={true} style={styles.textField} />
                    <TextField floatingLabelText="Description" floatingLabelFixed={true} multiLine={true} style={styles.textField} rows={4} />
                    <RaisedButton label="Submit" primary={true} style={styles.submitBtn} />
                </Paper>
            </MuiThemeProvider>
            {/* End of Create Job Post Form */}
        </div>
  )}
}