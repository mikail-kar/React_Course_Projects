import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const users = []; // Kayıtlı kullanıcıları saklamak için dizi

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemlerini gerçekleştir

    // Yeni kullanıcıyı kaydet
    const newUser = { email, password };
    users.push(newUser);

    // Kayıt işlemi tamamlandıktan sonra otomatik olarak Login sayfasına yönlendir
    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
