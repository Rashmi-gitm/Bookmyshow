import React, {useEffect, useState} from 'react';
import Login from '../../components/login/login';
import Signup from '../../components/signup/signup';
import "./authentication.css";
import { useNavigate } from 'react-router-dom';
import { newUserSignup, userSignin } from '../../api/auth';
import { storeUserData } from '../../utils/userData';
import { ROLES } from '../../constants/userRoles';

const Authentication = () => {
 const [showSignup, setShowSignup] = useState(false);
 const [loginMessage, setLoginMessage] = useState("");
 const [errorMessageSignup, setErrorMessageSignup] = useState("");
 const [errorMessageLogin, setErrorMessageLogin] = useState("");
 
const navigate = useNavigate();

      const goToSignup = () => {
         setShowSignup(true);
      };
      const goToLogin =() => {
         setShowSignup(false);
      };

      const redirectToPage = userType => {
        if(userType === ROLES.CUSTOMER){
          navigate("/customer");
        }else if (userType === ROLES.CLIENT){
          navigate("/client");
        } else {
          navigate ("/admin");
        }
      };

      //this is called on mounting
      useEffect (() => {
        if(localStorage.getItem("accessToken")) {
          const userType = localStorage.getItem("userTypes");
          redirectToPage(userType);
        }else {
          //if there is a query param that referrer a home
          //navigate("/home")
        }
      }, []);


    const handleLoginSubmit= (data) => {
      console.log(data);
      //api call
      userSignin(data)
          .then (res => {
        console.log(res);
        const {status, message, data} = res;
        if(status === 200) {
            if(message) {
              //case when login credentials are incorrect
              setErrorMessageLogin(message);
            }else{
              //success when api passess with correct credentials
             //store user data in the localstorage 
              storeUserData(data);

              //navigate to the correct page on login based on usertype
              const userType = data.userTypes;
              redirectToPage(userType);

            }
        }
      }).catch(err => {
        //case when api fails due to network/auth issue
        setErrorMessageLogin(
          err?.response?.data?.message || err?.message
          );
      });
      //1.make an api call and post the data
      //2. if api call is successful, redirect to concerned user
      //3. if api call is failure, show a message to user
           
       //if login is failure
      //dont redirect to next page
     
    };
    
    const handleSignupSubmit =(data) => {
         console.log(data);

         newUserSignup(data)
            .then(res => {
          const { message, status } = res;
          if (status === 201) {
            setShowSignup(false);
            setLoginMessage("Sign up Successful!!  Please Login");
          } else if (message) {
            setErrorMessageSignup(message);
          }
         }).catch (err => {
          setErrorMessageSignup(
            err?.response?.data?.message || err?.message
            );
         });

      //1.make an api call and post the data to signup
      //2. if api call is successful, redirect to login page
      //3. show a message to user that login is successful

      //if submit is successful
      //if signup is failure
      //dont call setSignup(false)
    };
    

       return (
        <div className='main'>
            {showSignup ? (
              <Signup 
              onSignupSubmit={handleSignupSubmit} 
              goToLogin={goToLogin}
              errorMessageSignup={errorMessageSignup}
            />
              ) : (
                <Login 
                onLoginSubmit={handleLoginSubmit} 
                goToSignup={goToSignup}
                loginMessage={loginMessage}
                errorMessageLogin={errorMessageLogin}
            />
         )}
  </div>
 );
};

export default Authentication;