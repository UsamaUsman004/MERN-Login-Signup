import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
    subject: yup
        .string('Enter your Subject')
        .required('Email is required'),
    description: yup
        .string('Enter your Description')
        .required('Password is required'),
});


function ModalContent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            subject: '',
            description: '',
        },



        onSubmit: function (values) {
            console.log(values);
        }
    });

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Box sx={{ m: 3 }}>

                        <form onSubmit={formik.handleSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    fullWidth
                                    color="primary"
                                    id="outlined-basic"
                                    label="Subject"
                                    variant="outlined"
                                    name="subject"
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                    helperText={formik.touched.subject && formik.errors.subject}
                                />

                                <TextField
                                    fullWidth multiline
                                    color="primary" id="outlined-basic" label="Description" variant="outlined" name="description"
                                    rows={4}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />


                                <Button fullWidth variant="contained" color="primary" type="submit">Post</Button>
                            </Stack>
                        </form>
                    </Box>


                </Modal.Body>

            </Modal>
        </>
    );
}
export default ModalContent