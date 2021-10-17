import * as React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from "formik";
import { Container, Paper, Button, TextField, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { baseUrl } from '../core'
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .max(10, 'No more then 10')
        .required('Password is required'),
});


export default function LogIn() {
    let history = useHistory();  

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: function (values) {
            
            console.log("values: ", values)
        
            axios.post(`${baseUrl}/api/v1/login`, {
                email: values.email,
                password: values.password,
            }).then((res) => {
                console.log("res: ", res.data);
        
                if (res.data.email) {
                    history.push("/")
                }
            })
        }
    });


    return (
        <div>

            <Container sx={{ marginTop: '5%' }}>
                <Paper sx={{ p: 5, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>

                    <h1> Log In</h1>

                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <TextField
                                fullWidth
                                color="primary"
                                id="filled-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />

                            <Button fullWidth variant="contained" color="primary" type="submit">Log In</Button>
                            <Link to="/">Don't Have an Account? SignUp</Link>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
