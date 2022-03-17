import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Register from './pages/Register';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
