import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      redirectToBoard: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const users = [
        { email: "furkan@gmail.com", password: "123" },
        
      ];
   
      this.setState({ isAuthenticated: true });

    const existingUser = users.find(user => user.email === email && user.password === password);
  
    if (existingUser) {
      
      console.log("Login successful");
      this.setState({ redirectToBoard: true });
    } else {
      
      console.log("Invalid email or password");
       }
  };
  

  render() {
    const { email, password, error, redirectToBoard } = this.state;

    if (redirectToBoard) {
      return <Navigate to="/board" replace />;
    }

    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <div className="form-group mt-3">
              <label>Email:</label>
              <input
                className="form-control mt-1"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          
            <div className="form-group mt-3">
              <label>Password:</label>
              <input
                className="form-control mt-1"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
            {error && <div className="error">Invalid email or password</div>}
            <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p>
             Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;