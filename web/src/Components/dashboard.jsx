import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { Link } from "react-router-dom";
// import Link from '@mui/material/Link';
import { useHistory } from "react-router-dom";


export default function Dashboard() {
    const history = useHistory();
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
                            <span
                                onClick={() => history.push("/")}
                                style={{ cursor: "pointer" }}
                            >
                                Task Application
                            </span>
                        </Typography>
                        

                        <Button color="inherit" onClick={() => history.push("/login")}>
                            Login
                        </Button>

                        <Button color="inherit" onClick={() => history.push("/signup")}>
                            Signup
                        </Button>

                        {/* <Button color="inherit" onClick={() => history.push("/profile")}>
                            Profile
                        </Button> */}

                        {/* 
                        <Link to="/login" sx={{ margin: 1 }} color="inherit" underline="none" >Login</Link>
                        <Link to="/signup" sx={{ margin: 1 }} color="inherit" underline="none">Sign Up</Link>
                        <Link to="/profile" sx={{ margin: 1 }} color="inherit" underline="none">Profile</Link> */}
                    </Toolbar>
                </AppBar>
            </Box>


            <h1>Welcome to the App , Navigate to proceed</h1>
        </div>
    )
}


