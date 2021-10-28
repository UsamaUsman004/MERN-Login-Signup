import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
};

function CreatePost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} color="inherit">Create Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Paper elevation={3} sx={{ p: 5 }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create Post
                        </Typography>


                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField fullWidth id="input-with-sx" sx={{ m: 1 }} label="Subject" variant="standard" multiline />
                        </Box>

                        <TextField
                            id="outlined-multiline-static"
                            label="What's in Your Mind"
                            multiline
                            rows={4}

                            fullWidth
                            sx={{ mt: 5 }}
                        />

                        <Button variant="contained" sx={{my:2}}>Post</Button>

                    </Paper>
                </Box>
            </Modal>
        </div>
    )
}

export default CreatePost
