import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PostsTemplate from "./PostsTemplate";
import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { baseUrl } from "../core";
import Stack from "@mui/material/Stack";
import { GlobalContext } from "../Context/context";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import LinearProgress from '@mui/material/LinearProgress';
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

const validationSchema = yup.object({
  subject: yup
    .string("Enter your Subject")
    .required("Email is required"),

  description: yup
    .string("Enter your Description")
    .required("Password is required"),

  imageFile: yup
    .string("Select your Image File")
    .required("Image File is required"),
});

function Posts() {
  const [value, setValue] = React.useState("1");
  const [progress, setProgress] = useState(0);
  const [postBtn, setPostBtn] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { state } = useContext(GlobalContext);

  const [allPost, setAllPost] = useState(null);
  const [continuousPost, setContinuousPost] = useState(false);
  const [currentUserPosts, setCurrentUserPosts] = useState(null);
  // const [imglink, setImglink] = useState(null)



  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/post`, { withCredentials: true })
      .then((result) => {
        // console.log("POSTS in DB ==>", result);
        let arr = [];
        result.data.forEach((element) => {
          arr.unshift(element);
        });

        setAllPost([...arr]);

        let currentUserPosts = arr.filter(
          (post) => post.email === state.user.email
        );
        setCurrentUserPosts(currentUserPosts);
      });
    return () => {
      // cleanup
    };

    // eslint-disable-next-line
  }, [continuousPost]);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      subject: "",
      description: "",
      imageFile: ""
    },

    
    onSubmit: function (values, { resetForm }) {
      console.log(values);
      resetForm({ values: '' })
      setProgress(0)
      setPostBtn(false)


      // formik.values.imageFile = ''

      // fileUpload(values.imageFile)

      axios.post(`${baseUrl}/api/v1/post`, {
        user: state.user.name,
        email: state.user.email,
        subject: values.subject,
        description: values.description,
        img: values.imageFile
      },
        {
          withCredentials: true
        })
        .then((res) => {
          console.log("res: ", res.data);
          // if (res.data) {
          //     history.push("/login")
          setContinuousPost(!continuousPost);
          // }
        });


    },
  });


  const fileUpload = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(prog);

    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            setPostBtn(true)
            formik.values.imageFile = url
          })
      }
    )
  }



  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Paper elevation={3} sx={{ p: 5 }}>
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
                fullWidth
                multiline
                color="primary"
                id="outlined-basic"
                label="Description"
                variant="outlined"
                name="description"
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />


              <input type="file" accept="image/*" name="imageFile" required
                onChange={
                  (event) => {
                    // formik.setFieldValue('imageFile', event.target.files[0])
                    fileUpload(event.target.files[0])
                  }
                }


              />
              {/* <h5>Uploaded : {progress} %</h5>
               */}

              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>

              {/* {progress > 100 ? <h1>Yes</h1> : <h1>No</h1>} */}

              {postBtn ?
                // <h1>Yes</h1>
                <Button fullWidth variant="contained" color="primary" type="submit">Post</Button>
                :
                // <h1>No</h1>
                <Button fullWidth disabled variant="contained" color="primary" >Post</Button>
              }



              {/* <Button fullWidth variant="contained" color="primary" type="submit">Post</Button>
              <Button fullWidth disabled variant="contained" color="primary" >Post</Button> */}


            </Stack>
          </form>
        </Paper>
      </Box>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="News Feed" value="1" />
              <Tab label="My Posts" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {allPost && <PostsTemplate posts={allPost} />}

            {!allPost && (
              <div>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexGrow: 1 }}
                  justifyContent="center"
                >
                  <Grid item md={6}>
                    <Stack spacing={1}>
                      <Skeleton variant="text" />
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={250}
                      />
                    </Stack>
                  </Grid>

                  <Grid item md={6}>
                    <Stack spacing={1}>
                      <Skeleton variant="text" />
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={250}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </div>
            )}
          </TabPanel>
          <TabPanel value="2">
            {currentUserPosts && <PostsTemplate posts={currentUserPosts} />}

            {!currentUserPosts && (
              <div>
                <Grid
                  container
                  spacing={2}
                  sx={{ flexGrow: 1 }}
                  justifyContent="center"
                >
                  <Grid item md={6}>
                    <Stack spacing={1}>
                      <Skeleton variant="text" />
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={250}
                      />
                    </Stack>
                  </Grid>

                  <Grid item md={6}>
                    <Stack spacing={1}>
                      <Skeleton variant="text" />
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={250}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </div>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Posts;
