import React from 'react';

const Login = (props) => {
  console.log(props);
  return (
  <button className="login btn" onClick={props.onLogin}>
     Login
   </button>
  );
};

export default Login;