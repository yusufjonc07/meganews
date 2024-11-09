import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import MainHeader from "./shared/UIElements/MainHeader";
import ReactPlayer from "react-player";
import Footer from "./shared/UIElements/Footer";


const App = () => {
  const [isLoggedIn] = useState(false);


  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
       
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
      <Router>
          <MainHeader />
          {/* <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        /> */}
          {routes}
          <Footer />
      </Router>
  );
};

export default App;
