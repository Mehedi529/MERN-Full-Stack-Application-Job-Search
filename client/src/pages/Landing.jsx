/* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
     <div className='container page'>
        <div className='info'>
          <h1>
             job <span>tracking</span> app
          </h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos error officiis neque corrupti non? Nemo, vel, quam quis expedita quidem nisi neque molestias blanditiis dicta voluptas inventore laudantium consequatur?
        Quae libero animi magni fuga molestias distinctio aliquid repellat quaerat, perferendis alias, voluptate, deleniti maxime nemo incidunt. Error, pariatur ratione at labore adipisci, voluptates minus natus voluptatibus ut quas consequatur?
       </p>
       <Link to="/register" className='btn register-link'>
         Register
       </Link>
       <Link to="/login" className='btn'>
         Login / Demo User
       </Link>
        </div>
          <img src={main} alt='job hunt' className='img main-img' />
     </div>
    </Wrapper>
  )
}

export default Landing