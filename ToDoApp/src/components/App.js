import "../styles/App.css";
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Board from "./Board";
import Login from "./Login";
import Register from "./Register";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false, // Oturum durumu
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <div className="Header">To-Do</div>
        <Routes>
          <Route
            exac
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path = "/register" element={<Register/>} />
          <Route path = "/board" element={<Board/>} />
          </Routes>
          
        
      </div>
    );
  }
}

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = this.state.isAuthenticated;
  return (
    <Routes>
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
    />
    </Routes>
  );
};

export default App;
