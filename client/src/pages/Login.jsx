/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import {FormRow, Logo } from '../components'


const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue='' />
        <FormRow type="password" name="password" defaultValue='' />

        <button type='button' className='btn btn-block'>
          submit
        </button>

        <button type='button' className='btn btn-block'>
          explore the app
        </button>
      </form>

      <p>
        Not a member yet?
      <Link to="/register">Register page</Link>
      </p>
      
    </Wrapper>
  )
}

export default Login