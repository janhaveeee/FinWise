import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token); // store token for backend
    alert("Login successful!");
    navigate("/dashboard");
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

  return (
    <form onSubmit={handleLogin} className="container mt-4">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />
      <button type="submit" className="btn btn-success">Login</button>
    </form>
  );
};

export default Login;
