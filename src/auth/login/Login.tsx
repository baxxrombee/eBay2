import { useState } from "react";
import instance from "../../api/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logocha from "../../images/logocha.jpeg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    instance.post("/auth/login", { email, password })
      .then(response => {
        setLoading(false);
        if (response.data.access_token) {
          localStorage.setItem('token', response.data.access_token);
          dispatch(login(response.data));
          navigate("/home");
        }
      })
      .catch(error => {
        setLoading(false);
        toast.error("Invalid email or password. Please try again.");
        console.error('Login error:', error);
      });
  }

  return (
    <div className="login__wrapper">
      <Link to="/"><img src={Logocha} alt="logocha" /></Link>
      <div className="login">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className="input" type="email" value={email} placeholder='your email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="input" type="password" value={password} placeholder='your password' onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="login-btn" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
          <div className="login__bottom">
            <p className="login_text">Using a public or shared device? Uncheck to protect your account.</p>
            <p className="login_link">Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
