import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module
import {backendUrl} from '../App'
import axios from 'axios'



const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
        if (response.data.success) {
            setToken(response.data.token)
        } else {
            toast.error(response.data.message)
        }
        //console.log(response);
    } catch (error) {
        console.log(error);
        console.error(error.message)
    }
    }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <h1 className={styles.loginHeading}>Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className={styles.loginForm}>
          <div className={styles.loginInputGroup}>
            <label htmlFor="email" className={styles.loginLabel}>
              Email Address
            </label>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              className={styles.loginInput}
            />
          </div>
          <div className={styles.loginInputGroup}>
            <label htmlFor="password" className={styles.loginLabel}>
              Password
            </label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className={styles.loginInput}
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;