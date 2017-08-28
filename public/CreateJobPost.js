/**
 * View file for Create Job Post page.
 * Provides Navbar and Create Job Post Form.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Import Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FlatButton, ToolbarGroup, Toolbar, ToolbarTitle, Paper, TextField, RaisedButton, DatePicker, SelectField, MenuItem } from 'material-ui';

// Import for routing
import { HashLink as Link } from 'react-router-hash-link';

import JobPostService from './JobPostService';

// Styling for Create Job Post page
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

// String values
const pageTitle = "Post an Internship";

// Contains all View components displayed in Create Job Post page
export default class CreateJobPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {title:'', location:'', closingDate:'', remuneration:'', description:''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleRemunerationChange = this.handleRemunerationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){
   this.setState({ title: event.target.value });
  }

  handleLocationChange(event){
   this.setState({ location: event.target.value });
  }

  handleRemunerationChange(event){
   this.setState({ remuneration: event.target.value });
  }

  handleDescriptionChange(event){
   this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    const titleRef = this.refs.title.trim();
    const locationRef = this.refs.location.trim();
    const remunerationRef = this.refs.remuneration.trim();
    const descriptionRef = this.refs.description.trim();
    if (titleRef.value && locationRef.value && remunerationRef.value && descriptionRef.value) {
      this.props.sendData(titleRef.value, locationRef.value, remunerationRef.value, descriptionRef.value);
      titleRef.value = locationRef.value = remunerationRef.value = descriptionRef.value = '';
    }
  }

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
              <form onSubmit={this.handleSubmit}>
                  <Paper style={styles.form} zDepth={1}>
                      <h1>{pageTitle}</h1>
                      <TextField floatingLabelText="Title" value={ this.state.title } onChange={ this.handleTitleChange }
                        floatingLabelFixed={true} style={styles.textField} />

                      <TextField floatingLabelText="Location" value={ this.state.Location } onChange={ this.handleLocationChange }
                        floatingLabelFixed={true} style={styles.textField} />
                      {/*
                      <div style={styles.textField}>
                          <DatePicker floatingLabelText="Closing Date" value={ this.state.closingDate } onChange={ this.handleClosingDateChange }
                            floatingLabelFixed={true} textFieldStyle={styles.datePicker} />
                      </div>

                      <SelectField floatingLabelText="Contract Type" floatingLabelFixed={true} style={styles.textField}>
                          <MenuItem value={1} primaryText="Permanent" />
                          <MenuItem value={2} primaryText="Temporary" />
                      </SelectField>
                      */}
                      <TextField floatingLabelText="Remuneration" value={ this.state.remuneration } onChange={ this.handleRemunerationChange }
                      floatingLabelFixed={true} style={styles.textField} />

                      <TextField floatingLabelText="Description" value={ this.state.description } onChange={ this.handleDescriptionChange }
                        floatingLabelFixed={true} multiLine={true} style={styles.textField} rows={4} />

                      <RaisedButton label="Submit" primary={true} value="Submit" style={styles.submitBtn} />
                  </Paper>
                </form>
            </MuiThemeProvider>
            {/* End of Create Job Post Form */}
        </div>
  )}
}
