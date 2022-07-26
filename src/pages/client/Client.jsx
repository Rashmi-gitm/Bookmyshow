import React from 'react'
import { useNavigate } from 'react-router-dom'

const Client = () => { 

 const  navigate = useNavigate();

const loginFn = () => {
  localStorage.clear();
  navigate("/login");
}

  return (
    <div>
      <h1>This is a client page.</h1>
      
      <button className='btn btn-success' onClick={loginFn}>
      Logout!
      </button>
    </div>
  )
}

export default Client