import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn } from '../features/userSlice';
import '../styling/home.css';
import { setSignedIn, setUserData } from '../features/userSlice';

function Homepage() {
  console.log('Home Page');
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = response => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? 'none' : '' }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading news some quality blogs.
          </p>
          <GoogleLogin
            clientId="1034526437358-a2inrk2rfc7nam7pjgtjhs4ouopgek06.apps.googleusercontent.com"
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Homepage;
