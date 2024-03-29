/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'submitting...' : 'submit'}
    </button>
  );
};
export default SubmitBtn;
