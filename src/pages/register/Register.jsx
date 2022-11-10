import React from 'react';
import {Formik, Form} from 'formik';
import  * as Yup from 'yup'
 import TextField from '../../components/textField/TextField';

 import './Register.css'

const Register = () => {
    const validate= Yup.object({
        firstName: Yup.string().required('First name is required').max(15 , "Must be 15 character or less"),
        lastName: Yup.string().required('Last Name is required').max(15 , "Must be 15 character or less"),
        email :Yup.string().required('Email is required').email('Email is Invalid!'),
        password: Yup.string().required('Password is required').min(7 , "Must be 7 character or more"),
        confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref('password'),null], 'Password not match!')

    })
  return (

        <Formik 
            initialValues={{
                firstName :'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >

            {formik =>(
                    <div className="register">
                        <div className="register-header"><h1>Register</h1></div>
                    
                    <Form className="register-form">
                        <TextField label="First Name" name="firstName" placeholder="first name" type="text" />
                        <TextField label="Last Name" name="lastName" placeholder="last name" type="text" />
                        <TextField label="Email" name="email" placeholder="email" type="email" />
                        <TextField label="Password" name="password" placeholder="password" type="text" />
                        <TextField label="Confirm Password" name="confirmPassword" placeholder="confirm password" type="text" />
                        <div className="register-buttons">
                        <button className="register-button" type="submit">Register</button>
                        <button className="reset-button" type="submit">Reset</button>
                        </div>
                    </Form>
                    </div>

            )}


        </Formik>
        

  
  )
}

export default Register