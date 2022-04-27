import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home, Login, Register, Profile, About, Explore, ErrorPage, SearchResults, ShowDetails } from './pages';

import { Today, Top, Season } from './components/Containers/ExploreContainers';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/Routing/PrivateRoute';

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
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path='/explore' element={<Explore />}>
            <Route path='top' element={<Top />} />
            <Route path='today' element={<Today />} />
            <Route path='season' element={<Season />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
          <Route path='/search/:searchQuery' element={<SearchResults />}></Route>
          <Route path='/show/:id' element={<ShowDetails />}></Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
