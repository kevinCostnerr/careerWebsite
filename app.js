import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class App extends React.Component {
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
    </div>
  )}
}

ReactDOM.render(<App />,
document.getElementById('app'));
