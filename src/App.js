import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import User from './components/userlist';
import Image from './components/image';
import Copy from './components/copy';
import { Nav } from 'react-bootstrap';
import NavBar from './components/Navbar';

class App extends React.Component{
 
  render(){
    return (
      <div className="container App">  

        <NavBar/>
        <Router>
                <Switch>
                  <Route  path="/" exact component={User} />
                  <Route  path="/image" exact component={Image} />
                  <Route  path="/copy" exact component={Copy} />
                    
                    
                </Switch>        
            </Router>
 
      </div>
    );
  }
}

export default App;
