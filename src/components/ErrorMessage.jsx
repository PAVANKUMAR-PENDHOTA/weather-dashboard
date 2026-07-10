/* eslint-disable no-unused-vars */
import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p className="error-text">{error}</p>
    </div>
  )
}

export default ErrorMessage

