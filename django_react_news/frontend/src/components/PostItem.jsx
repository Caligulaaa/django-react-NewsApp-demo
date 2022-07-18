import React from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PostItem = (props) => {
    return (
        <Card sx={{ maxWidth: 750,
        margin: 3, 
        textAlign: 'center', 
        background: 'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )'
         }} >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                <strong>{props.post.title}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                {props.post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`/news/${props.post.id}`} style={{textDecoration:'none',color:'gray'}}>Learn more</Link>
                </Button>
            </CardActions>
        </Card>
    );
};
export default PostItem;