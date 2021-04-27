import './App.css';
import React from 'react';
import Dieuhuong from "./router/Router";
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {

  return (
    <Router>
      <div className="App">
          <Dieuhuong/>
      </div>
    </Router>
  );
}

export default App;
