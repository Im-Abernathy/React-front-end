import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Artwork from './pages/artwork'
import ContactPage from './pages/contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {useState} from 'react';
import Footer from './components/FooterSection';
import Bio from './pages/bio';
import Shows from './pages/shows';


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
        <Route path="/artwork" component={Artwork} exact/>
        <Route path="/bio" component={Bio} exact/>
        <Route path="/shows" component={Shows} exact/>
        <Route path="/contact" component={ContactPage} exact/>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
