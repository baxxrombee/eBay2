import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from "../../api/axios";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/authSlice";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Logocha from "../../images/logocha.jpeg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    instance.post("/users/", { name, email, password, avatar })
      .then(response => {
        setLoading(false);
        if (response.data.id) {
          // Save registration details to local storage
          localStorage.setItem('registrationData', JSON.stringify(response.data));
          // Dispatch register action
          dispatch(register(response.data));
          // Navigate to home page
          navigate("/home");
        }
      })
      .catch(error => {
        setLoading(false);
        if (error.response && error.response.data && error.response.data.message) {
          toast.warning(error.response.data.message);
        } else {
          toast.warning("An error occurred while registering. Please try again later.");
        }
      });
  }

  return (
    <div className="register__wrapper">
      <div className="logocha">
        <Link to="/"><img src={Logocha} alt="logocha"/></Link>
      </div>
      <div className="register">
        <ToastContainer />
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className='input' type="text" value={name} placeholder='Your name' onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input className='input' type="email" value={email} placeholder='Your email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className='input' type="password" value={password} placeholder='Your password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className='input' type="url" value={avatar} placeholder='Your avatar URL' onChange={e => setAvatar(e.target.value)} />
          </div>
          <button className='register-btn' disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </form>
        <div className="register__bottom">
          <p className='register_text'>By Creating an account, you agree to our User Agreement and acknowledge reading our User Privacy Notice .</p>
          <p className='register_link'>already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
