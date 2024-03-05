/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import { FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='' />
        <FormRow type='text' name='lastName' labelText='last Name' defaultValue='' />
        <FormRow type='text' name='location' defaultValue='' />
        <FormRow type='email' name='email' defaultValue='' />
        <FormRow type='password' name='password' defaultValue='' />
         
         <button type='submit' className='btn btn-block'>
          submit
         </button>
         <p>
          Already a member?
          <Link to="/login" className='member-btn'>Login</Link>
         </p>
      </form>
          
    </Wrapper>
  )
}

export default Register