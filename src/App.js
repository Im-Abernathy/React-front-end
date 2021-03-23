import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {useState} from 'react';
import Footer from './components/FooterSection';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      

      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/contact" component={ContactPage} exact/>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
