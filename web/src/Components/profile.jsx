import React, { useContext, useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ProfileComponenet from './profileComponent'
import {GlobalContext} from '../Context/context'

export default function Profile() {

    let { state, dispatch } = useContext(GlobalContext);
    console.log(state);

    return (


        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <ProfileComponenet />
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            



        </div>
    )
}


