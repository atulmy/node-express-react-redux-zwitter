// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// UI Imports
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App Imports
import rootReducer from './reducers/root';
import App from './app';
import './index.css';

const store = createStore(
    rootReducer,

    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

injectTapEventPlugin();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);
