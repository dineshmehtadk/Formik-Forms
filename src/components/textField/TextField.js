import React from 'react';
import { ErrorMessage,useField } from 'formik';
import './TextField.css';
import {MdError} from 'react-icons/md'

const TextField = ({label, ...props}) => {

  
  const [field,meta] = useField(props)
 
  return (
    <div className="textField">
      <div className="textField-container">
      <label htmlFor={field.name}>{label}</label>
      {meta.touched &&meta.error && <MdError className="error-icon" />}
      <input className={`textField-input ${meta.touched && meta.error  && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
       />
       </div>
       <ErrorMessage component="div" name={field.name} className="textField-error" />
    </div>
  )
}

export default TextField