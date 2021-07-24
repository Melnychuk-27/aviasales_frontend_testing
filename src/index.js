import React from 'react';
import ReactDOM from 'react-dom';
import './style.css' 
import ErrorBoundry from './components/error-boundry';

import App from './components/app';
// import { BookstoreServiceProvider } from './components/bookstore-service-context';


// const bookstoreService = new BookstoreService();

ReactDOM.render(
    <ErrorBoundry>
        <App />
    </ErrorBoundry>,
    document.getElementById('root')
);