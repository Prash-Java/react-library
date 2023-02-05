import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Carousel } from './layouts/HomePage/components/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/components/ExploreTopBooks';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/components/LibraryServices';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'></Redirect>
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>

  );
}
