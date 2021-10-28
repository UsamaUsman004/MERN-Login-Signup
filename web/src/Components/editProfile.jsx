import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditProfile() {

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update your profile , and make sure you remember your new credentials.
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" fullWidth variant="standard" />

                    <TextField autoFocus margin="dense" id="name" label="name" type="text" fullWidth variant="standard" />

                    <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth variant="standard" />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditProfile
