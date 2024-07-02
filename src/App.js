import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const fareHarborLink = 'https://fareharbor.com/yourcompany/book/';

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" render={(props) => <Services {...props} fareHarborLink={fareHarborLink} />} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" render={(props) => <Booking {...props} fareHarborLink={fareHarborLink} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
