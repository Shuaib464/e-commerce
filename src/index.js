import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './pages/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shopping-cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
