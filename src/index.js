// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// Application dependencies
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';


ReactDOM.render(
  <Provider store={applicationStore()}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
