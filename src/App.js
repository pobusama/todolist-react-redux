import store from './js/react/store';
import Container from './js/react/container';
import React, {Component} from 'react';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
		    <Container />
	    </Provider>
    );
  }
}

export default App;
