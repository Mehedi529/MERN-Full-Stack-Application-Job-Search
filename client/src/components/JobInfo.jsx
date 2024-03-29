/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Wrapper from '../assets/wrappers/JobInfo';

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
