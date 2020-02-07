import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import {userLogin} from '../Actions/index';


const LoginForm = (props) => {
    const [loginInfo, setLoginInfo] = useState({ username: "", password: ""});

    const handleSubmit = e => {
        e.preventDefault();
        userLogin(loginInfo)
    
    console.log(loginInfo)

    axios
        .post('https://cors-anywhere.herokuapp.com/https://med-cab-backend.herokuapp.com/api/user/login', loginInfo) 
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/display');
        })
        .catch(err => console.log(err, 'Login to Continue'))
    };

    const handleChanges = e => {
        setLoginInfo({...loginInfo, [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
    };

    return (
        <div>
            <input type="username" name="username" placeholder="username" value={loginInfo.username} onChange={handleChanges} />
            <input type="password" name="password" placeholder="password"
            value={loginInfo.password} onChange={handleChanges} />
            <button type='submit' onClick={handleSubmit}>Login</button>
     </div>
    );
};
export default LoginForm;
//             <div>
//                 {touched.password && errors.password && <p>{errors.password}</p>}
//                 <Field type="password" name="password" placeholder="password" />
//             </div>
//             <button onClick={handleSubmit}>Login</button>
    


// function LoginForm({ values, errors, touched, isSubmitting }) {
//     // const [user, setUser] = useState([]);

//     // useEffect(() => {
//     //     if (status === true) {
//     //         history.pushState('/')
//     //     }
//     // }, [status]);
//     const handleSubmit = (values, { setStatus, props }) {
//         axiosWithAuth()
//         .post('https://med-cabinet-1.herokuapp.com/api/user/login', values)
//         .then(res => {
//             console.log(res);
//             setStatus(res.data);
//             props.history.push('/');
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     }

//     return (
//         <Form>
//             <div>
//                 {touched.username && errors.username && <p>{errors.username}</p>}
//                 <Field type="username" name="username" placeholder="username" />
//             </div>
//             <div>
//                 {touched.password && errors.password && <p>{errors.password}</p>}
//                 <Field type="password" name="password" placeholder="password" />
//             </div>
//             <button onClick={handleSubmit}>Login</button>
//         </Form>
//       );
//     }
    
//     const FormikLoginForm = withFormik({
//         mapPropsToValues({ username, password }) {
//             return {
//                 username: username || '',
//                 password: password || ''
//             };
//         },
//         validationSchema: Yup.object().shape({
//             username: Yup.string()
//                 .required('Field required'),
//             password: Yup.string()
//                 // .min(8, "Password must be at least 8 characters")
//                 .required('Field required')
//         }),
//         handleSubmit(values, { setStatus, props }) {
//             axiosWithAuth()
//             .post('https://med-cabinet-1.herokuapp.com/api/user/login', values)
//             .then(res => {
//                 console.log(res);
//                 setStatus(res.data);
//                 props.history.push('/');
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//         }
//     })(LoginForm);
//     export default FormikLoginForm;

