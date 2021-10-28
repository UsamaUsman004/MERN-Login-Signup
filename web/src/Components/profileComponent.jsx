import React, { useContext } from "react";
import { GlobalContext } from '../Context/context'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import EditProfile from './editProfile'
// import Stack from '@mui/material/Stack';

export default function SwipeableTemporaryDrawer() {

    let { state, dispatch } = useContext(GlobalContext);


    const [menuToggle, setmenuToggle] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setmenuToggle({ ...menuToggle, [anchor]: open });
    };

    const list = (anchor) => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>

            <List>

                <ListItem >
                    <Avatar alt="User"
                        sx={{ width: 56, height: 56 }}
                        src="https://media-exp1.licdn.com/dms/image/C5103AQGAb_GYoLFM7A/profile-displayphoto-shrink_200_200/0/1564347397659?e=1639612800&v=beta&t=1zAw1iPqsETqK7DUN2nXvydn8wnz8n26I1pMPXUP0_c" />
                    <Typography variant="h6" gutterBottom component="div"
                        sx={{ marginLeft: 3, marginTop: 1 }}>
                        {state.user.name}
                    </Typography>

                </ListItem>

            </List>

            <Divider />


            <List>
                <ListItem button key={state.user.name}>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary={state.user.name} />
                </ListItem>

                <ListItem button key={state.user.email}>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={state.user.email} />
                </ListItem>

                <ListItem button key={state.user.created}>
                    <ListItemIcon>
                        <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText primary={state.user.created} />
                </ListItem>
            </List>


            <Divider />

            {/* <List>

                <ListItem >
                    <EditProfile />
                </ListItem>

            </List> */}


        </Box>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <Button color="inherit" onClick={toggleDrawer('left', true)}>Profile</Button>
                <SwipeableDrawer anchor='left' open={menuToggle['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)} >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
