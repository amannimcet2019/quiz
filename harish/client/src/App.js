import React from 'react';
import NavBar from './components/public/NavBar';
import Footer from './components/public/Footer';
import Home from './components/public/Home';
import Recommend from './components/public/Recommend';
import History from './components/public/History';
import Test from './components/public/Test';
import DbmsTest from './components/public/DbmsTest';
import OsTest from './components/public/OsTest';
import Login from './components/user/Login';
import Logout from './components/user/Logout';
import Registration from './components/user/Registration';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App =()=>{
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Logout" component={Logout}></Route>
            <Route exact path="/Registration" component={Registration}></Route>
            <Route exact path="/Recommend" component={Recommend}></Route>
            <Route exact path="/History" component={History}></Route>
            <Route exact path="/Test" component={Test}></Route>
            <Route exact path="/DBMS/Test/:id" component={DbmsTest}></Route>
            <Route exact path="/OS/Test/:id" component={OsTest}></Route>
          </Switch>
         <Footer/>
      </Router>      
    </React.Fragment>
  )
}

export default App;