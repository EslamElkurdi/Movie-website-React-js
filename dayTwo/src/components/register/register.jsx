import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Username is required').matches(/^\S*$/, 'Username cannot contain spaces'),
    password: Yup.string().required('Password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=])(?=.{8,})/, 'Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      subscribe: false
    },
    validationSchema,
    onSubmit: values => {
    //   Submit
      console.log(values);
    },
  });

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-2 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='name' type='text' className='w-100' {...formik.getFieldProps('name')}/>
                 </div>
                 <p className='mt-0 text-danger'>{formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null} </p>
                
                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='email' type='email' {...formik.getFieldProps('email')}/>
                  </div> 
                  <p className='mt-0 text-danger'> {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}</p>
                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Username' id='username' type='text' {...formik.getFieldProps('username')}/>                 
                </div>
                <p className='mt-0 text-danger'>{formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}</p>

                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='password' type='password' {...formik.getFieldProps('password')}/>
                  </div>
                  <p className='mt-0 text-danger'>{formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}</p>

                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Repeat your password' id='confirmPassword' type='password' {...formik.getFieldProps('confirmPassword')}/>
                  </div>
                  <p className='mt-0 text-danger'>{formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}</p>

                <div className='mb-4'>
                  <MDBCheckbox name='subscribe' id='subscribe' label='Subscribe to our newsletter' {...formik.getFieldProps('subscribe')}/>
                </div>

                <MDBBtn type="submit" className='mb-4' size='lg'>Register</MDBBtn>
              </form>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;
