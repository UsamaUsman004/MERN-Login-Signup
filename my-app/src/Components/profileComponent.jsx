import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Paper, Button } from '@mui/material';


const user = localStorage.getItem('currentUser');
const currentUser = JSON.parse(user);
console.log(currentUser)






const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                User:
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              User
            </Typography>
            
            <Typography variant="body2">
                Email:
                <br />
                Email
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (

        <Container sx={{ marginTop: '5%' }}>
            <Paper sx={{ p: 5, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <h1>Profile </h1>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">{card}</Card>
                </Box>

            </Paper>
        </Container>
    );
}
