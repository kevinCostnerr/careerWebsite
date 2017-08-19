import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
        <h2>anjeng kau kimak lontong kuda cewek anjeng cowok anjeng</h2>
    </div>
  )}
}

ReactDOM.render(<App />,
document.getElementById('app'));
