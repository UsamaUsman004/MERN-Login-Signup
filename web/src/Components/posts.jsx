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

const validationSchema = yup.object({
  subject: yup.string("Enter your Subject").required("Email is required"),
  description: yup
    .string("Enter your Description")
    .required("Password is required"),
});

function Posts() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { state } = useContext(GlobalContext);
  // console.log(state)

  const [allPost, setAllPost] = useState(null);
  const [continuousPost, setContinuousPost] = useState(false);
  const [currentUserPosts, setCurrentUserPosts] = useState(null);

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
    },

    onSubmit: function (values) {
      console.log(values);

      axios
        .post(`${baseUrl}/api/v1/post`, {
          user: state.user.name,
          email: state.user.email,
          subject: values.subject,
          description: values.description,
        },{
            withCredentials:true
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

  // const [posts, setPosts] = useState(
  //     [
  //         {
  //             key: 1,
  //             avatar: 'U',
  //             user: 'Usama Usman',
  //             date: '27 October 2021',
  //             main: 'Dummy',
  //             Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'

  //         },

  //         {
  //             key: 2,
  //             avatar: 'A',
  //             user: 'Abdul Rafeh',
  //             date: '27 October 2021',
  //             main: 'Abdul Rafeh',
  //             Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'
  //         },
  //         {
  //             key: 3,
  //             avatar: 'J',
  //             user: 'Javed Ali',
  //             date: '27 October 2021',
  //             main: 'Javed Ali',
  //             Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus porro quidem laborum maiores? Reprehenderit ratione ipsum recusandae nihil? Alias saepe porro possimus eligendi accusantium odit, at voluptates mollitia vel.'

  //         },
  //     ]
  // );

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

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Post
              </Button>
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
