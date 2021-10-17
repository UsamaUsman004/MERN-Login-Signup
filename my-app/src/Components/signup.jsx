import * as React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from "formik";
import { Container, Paper, Button, TextField, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { baseUrl } from '../core'

function onSubmitFunction(values ,{ resetForm }) {
    axios.post(`${baseUrl}/api/v1/signup`, {
        name: values.name,
        email: values.email,
        password: values.password,
    }).then((res) => {
        console.log("res: ", res.data);
    })
}

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
    name: yup
        .string('Enter your name')
        .required('Name is required'),
});


export default function SignUp() {
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: onSubmitFunction
    });

    return (
        <div>
            <Container sx={{ marginTop: '5%' }}>
                <Paper sx={{ p: 5, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                    <h1> Sign Up</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />

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

                            <Button fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
                            <Link to="/login">Already Have an Account? Login</Link>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
