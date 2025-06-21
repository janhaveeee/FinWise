import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token);
    alert("Registered successfully!");
    navigate("/dashboard");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already in use. Please log in instead.");
      navigate("/login");
    } else {
      alert("Registration error: " + error.message);
    }
  }
};

  return (
    <form onSubmit={handleRegister} className="container mt-4">
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;
