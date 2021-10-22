import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { Link } from "react-router-dom";
import Link from '@mui/material/Link';


function dashboard() {
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
                            Task Application
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}

                        
                        <Link href="/login" sx={{ margin: 1 }} color="inherit" underline="none" >Login</Link>
                        <Link href="/signup" sx={{ margin: 1 }} color="inherit" underline="none">Sign Up</Link>
                        <Link href="/profile" sx={{ margin: 1 }} color="inherit" underline="none">Profile</Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default dashboard
