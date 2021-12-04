import React, { useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { GlobalContext } from '../Context/context'
import ModalContent from './ModalContent'

export default function AllPosts(props) {
    let { state } = useContext(GlobalContext);
    return (
        <div>

            <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
                {props.posts.map(post => {
                    return (

                        <Grid item md={6} key={post._id}>

                            <Card sx={{ maxWidth: 'auto', height: '250px' }}>



                                <CardHeader
                                    avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> A </Avatar>}
                                    title={post.user} subheader={post.created}





                                    action={

                                        (state.user.email === post.email) ?
                                            // <IconButton aria-label="settings">
                                            //     <EditIcon />
                                            // </IconButton>

                                            <ModalContent />
                                            :
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>



                                    }
                                />
                                <Divider />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.subject}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
