import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AllPosts(props) {
    return (
        <div>
            <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
                {props.posts.map(post => {
                    return (

                        <Grid item>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> {post.avatar} </Avatar>}
                                    title={post.user} subheader={post.date}
                                />
                                <Divider />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.main}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.Description}
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
