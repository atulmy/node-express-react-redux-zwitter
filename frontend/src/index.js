// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);
