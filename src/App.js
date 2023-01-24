import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Grid from './components/Grid/Grid';
import Movie from './components/Movie/Movie';
import Footer from './components/Footer/Footer';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Header />
          <Routes>
            <Route exact path='/'>
              <Route element={<Home/>} />
              <Route element={<Grid/>} />
            </Route>
            <Route path='/:id' element={<Movie/>} />
            <Route element={<Error/>} />
          </Routes>
          {/*<Footer />*/}
        </div>
      </Router>
    );
  }
}

export default App;