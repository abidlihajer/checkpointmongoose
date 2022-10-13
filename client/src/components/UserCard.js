import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getOneUser } from '../redux/actions/userActions';

export default function UserCard({user}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleDelete=()=>{
        dispatch(deleteUser(user._id))
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://slp-statics.astockcdn.net/static_assets/staging/22spring/free/browse-asset-collections/Card2_435177630.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {user.lastname}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {user.firstname}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleDelete}>Delete</Button>
        <Button size="small" variant="contained" onClick={()=>{
            dispatch(getOneUser(user._id));
            navigate('/edit')
        }}>Edit</Button>
      </CardActions>
    </Card>
  );
}
