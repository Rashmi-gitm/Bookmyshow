import React, {useState} from 'react'
import './login.css';

const Login = (props) => {
  const{onLoginSubmit, goToSignup, loginMessage, errorMessageLogin} = props;
  const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
   

    const handleSubmit = e => {
      //1. create the data object
      //2. call the onLoginSubmit with data
      //3. e. prevent default to prevent submit

      const data = { userId, password };
      onLoginSubmit(data);
      e.preventDefault();
    };

    return (
        <div className='justify-content-center d-flex align-items-center vh-100'>
        <div className='bg-light auth-container p-5'>         
        <h1>Login</h1>

<form onSubmit={handleSubmit}>
<div className='input-group'>
    <input type="text" 
           placeholder='Enter UserId'
           value={userId}
           className='form-control m-1'
           onChange={e => {
            setUserId(e.target.value);
           }}
           />
</div>
<div className='input-group'>
<input type="password" 
           placeholder='Enter Password'
           value={password}
           className='form-control m-1'
           onChange={e => {
            setPassword(e.target.value);
           }}
           />
    </div>
    <div className='input-group'>
    <input type="submit" className='form-control m-1 btn btn-primary'
     value="Log In" />
    </div>
    <div> Don't have an account? <a href='#' onClick={goToSignup}>
    Sign Up!
    </a>
   </div>
   <div className='error-msg text-danger m-1'> {errorMessageLogin}</div>
   <div className='text-success m-1'> {loginMessage}</div>
    </form>
    </div>
  </div>
    
  )
}

export default Login;
