import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {

    const [errors, setError] = useState({
        emailError: "",
        passwordError:""
    })

    const [user, setUser] =   useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    const handleValidation = (e)=>{
        if(e.target.name==='email'){
            setUser({...user,  email : e.target.value});
            setError({...errors, emailError:(e.target.value === "") ? "Email field cannot be empty" : (e.target.value.includes('@'))? '' : "Invalid Email"})

        }else if(e.target.type==='password'){
            setUser( {...user, password: e.target.value});
            setError({...errors, passwordError:(e.target.value === "") ? "Password field cannot be empty" : (e.target.value.length) < 8 ? 'Password must be more than 8 numbers' : ""})

        }
    }


  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' 
        value={user.email} 
        label='Email address' 
        id='form1' 
        name='email' 
        type='email'
        onChange={(e)=>{handleValidation(e)}}
        />
        <p className='text-danger pt-0 my-0'>{errors.emailError}</p>
      <MDBInput wrapperClass='mb-4' 
        value={user.password} 
        label='Password' 
        id='form2'
        name='password' 
        type={showPassword ? 'text' : 'password'}
        onChange={(e)=>{handleValidation(e)}}
        />
        <MDBBtn className="toggle-password-btn" onClick={togglePasswordVisibility}>
        <MDBIcon icon={showPassword ? 'eye-slash' : 'eye'} />
      </MDBBtn>
          <p className='text-danger pt-0 my-0'>{errors.passwordError}</p>
      

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default Login;