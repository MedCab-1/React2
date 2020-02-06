import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const Signup = ({ values, errors, touched, status, history }) => {
    // const [newUser, setNewUser] = useState([]);

    // useEffect(() => {
    //     if (status === true) {
    //         history.push('/');
    //     }
    // }, [status]);

    return (
        <div className='sign-up'>
            <h1>Med Cabinet</h1>
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
                        <Link to='/login'> Login Here</Link></p>
                    </Form>
                    {/* {newUser.map(user => {
                        <ul key={user.id}>
                            <li>Username: {user.username}</li>
                            <li>Password: {user.password}</li>
                        </ul>
                    })} */}
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
        const URL = 'https://med-cabinet-1.herokuapp.com/'; 

        const newUsers = {
            username: values.username,
            password: values.password
        };

        axios
            .post(`${URL}`, newUsers) 
            .then(res => {
                console.log(`Login Successful`, res);
                setStatus(res.data);
                props.history.push('/'); 
            })
            .catch(err => console.log(err.response))
    }
})(Signup);

export default FormikSignUpForms;