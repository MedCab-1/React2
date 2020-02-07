import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import '../App.css'

    // const [newUser, setNewUser] = useState([]);

const Signup = ({ values, errors, touched, status, history }) => {

    return (
        <div className='sign-up'>
            <h1>Welcome</h1>
                <h3>Sign Up Today!</h3>
                    <Form>
                        <Field
                            type='text'
                            name='username'
                            placeholder='Username' 
                            />
                        {touched.username && errors.username && (
                            <p className='errors'>
                                {errors.username} </p>
                            )}
                        <Field  
                            type='password'
                            name='password'
                            placeholder='Password'
                            />
                        {touched.password && errors.password && (
                            <p className='errors'>
                            {errors.password}</p>
                        )}
                        <button type='submit'>Sign Up</button>
                            <p className='login-link'>Already a Member? 
                        <Link to='/loginform'> Login Here</Link></p>
                    </Form>
        </div>
    );
};

const FormikSignUpForms = withFormik ({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Required Field'),
        password: Yup.string().required('Required Field')
    }),
    handleSubmit(values, { setStatus, props }) {
        console.log('Submit', values);

        const URL = 'https://med-cab-backend.herokuapp.com/api/user/register'; 

        const newUsers = {
            username: values.username,
            password: values.password
        };

        axios
            .post(`${URL}`, newUsers) 
            .then(res => {
                console.log(`Login Successful`, res);
                setStatus(res.data);
                props.history.push('/display'); 
            })
            .catch(err => console.log(err.response))
    }
})(Signup);

export default FormikSignUpForms;