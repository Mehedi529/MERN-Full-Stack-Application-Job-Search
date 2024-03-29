/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import {FormRow, Logo } from '../components'
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useActionData } from 'react-router-dom';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
  if (data.password.length < 3) {
    errors.msg = 'password too short';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    errors.msg = error.response.data.msg;
    return errors;
  }
};


const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>login</h4>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <p></p>
        <FormRow type="email" name="email" defaultValue='' />
        <FormRow type="password" name="password" defaultValue='' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>

        {/* <SubmitBtn /> */}

        <button type='button' className='btn btn-block'>
          explore the app
        </button>
      

      <p>
        Not a member yet?
        <Link to='/register' className='member-btn'>
            Register
        </Link>
      </p>
      </Form>
    </Wrapper>
  )
}

export default Login