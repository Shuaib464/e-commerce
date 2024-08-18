import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import {Provider} from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
        </BrowserRouter>
    </Provider>
);
