import { Box, Button, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {updateUser} from '../redux/actions/userActions'

function EditUser() {
    const [user,setUser]=useState({lastname:"",firstname:"",email:"",password:"",age:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()
const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
const userStore=useSelector(state=>state.userReducer.user)

useEffect(()=>{
    setUser({lastname:userStore?.lastname,firstname:userStore?.firstname,email:userStore?.email,password:userStore?.password,age:userStore?.age})
},[userStore])

const handleEdit=()=>{
    dispatch(updateUser(userStore._id,user))
    navigate('/users')
}

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"50px auto",width:"50%"}}>
      <TextField id="outlined-basic" label="lastname" variant="outlined" fullWidth name="lastname" onChange={handleChange} />
      <TextField id="outlined-basic" label="firstname" variant="outlined" fullWidth  name="firstname" onChange={handleChange}/>
      <TextField id="outlined-basic" label="email" variant="outlined" fullWidth  name="email" onChange={handleChange}/>
      <TextField id="outlined-basic" label="password" variant="outlined" fullWidth  name="password" onChange={handleChange}/>
      <TextField id="outlined-basic" label="age" variant="outlined" fullWidth name="age" onChange={handleChange}/>
      <Button variant='contained' fullWidth onClick={handleEdit} >Submit</Button>
    </Box>
  )
}

export default EditUser