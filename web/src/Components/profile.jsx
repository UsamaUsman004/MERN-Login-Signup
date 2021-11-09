import React, { useContext, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ProfileComponenet from './profileComponent'
import { GlobalContext } from '../Context/context'
import Paper from '@mui/material/Paper';
import Posts from './posts'
import { useHistory } from "react-router-dom";
import Message from './message'
import axios from 'axios';
import { baseUrl } from '../core';

export default function Profile() {
    const history = useHistory();

    let { state, dispatch } = useContext(GlobalContext);

    console.log("State in Profile Page",state)

    const [messageBar, setMessageBar] = useState("");

    const logout = () => {
        axios.post(`${baseUrl}/api/v1/logout`, {}, {
            withCredentials: true
        }).then((res) => {
            if (state?.user?.name) {
                setMessageBar(true);
                setTimeout(() => {
                    history.push("/");
                    dispatch({
                        type: "USER_LOGOUT",
                        payload: null,
                    });
                    setMessageBar([]);
                }, 1000);
            }

            else {
                setMessageBar(false);
                setTimeout(() => {
                    setMessageBar([]);
                }, 1000);
            }
        });
    };

    return (


        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>

                        <ProfileComponenet />
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Paper variant="outlined" >
                <Posts />
            </Paper>

            {
                messageBar === true ? (
                    <Message type="success" message="Good bye!" />
                ) : (
                    ""
                )
            }
            {
                messageBar === false ? (
                    <Message type="error" message="Sorry! Something went wrong" />
                ) : (
                    ""
                )
            }
        </div >
    )
}


