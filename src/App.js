// import React from 'react';
// import './App.css';
import LoginGrid from './LoginGrid';
import AllPostScroll from './AllPostScroll';
import Home from './Home';
import React, {Component} from 'react';
import {Router, Route, browserHistory, Redirect} from "react-router";
// import './App.css';
// import { UserProvider } from './Components/Context';
class App extends Component {
  render() {
    return (
      <div>
        
        <Router history={browserHistory}>   
            <Redirect from="/" to="/Login" />
            <Route> 
        <Route exact path="/" component={LoginGrid}/>
        {/* <Route exact path="/PublicView" component={AllPost}/> */}
        <Route exact path="/Login" component={LoginGrid} />
        <Route exact path={"/AllPost/"} component={AllPostScroll} />
        <Route exact path={"/Home/"} component={Home} />
        {/* <Route exact path={"/Share/:shareId"} component={ShareScreen} />
        <Route exact path={"/Tarento/Inspire/:shareId"} component={Publicshare} />
        <Route exact path="/PublicLogin" component={PublicLogin} />
        <Route exact path="/ViewAllPost" component={ViewAllPost} />
        { <Route exact path={"/Tarento/Inspire/:shareId"} component={Publicshare} /> } */}
        
        </Route>
      </Router>
      </div>
    )
  }
}
export default App;