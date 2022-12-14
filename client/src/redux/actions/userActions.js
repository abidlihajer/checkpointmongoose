import axios from "axios"
import { GETUSERS,GETUSER } from "../types"



export const getAllUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/users/allusers')
        dispatch({
            type:GETUSERS,
            payload:res.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const addUser=(data)=>async(dispatch)=>{
  
    try {
       await axios.post('/users/adduser',data)
       dispatch(getAllUsers()) 
    } catch (error) {

       console.log(error)   
    }
}
export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/users/removeuser/${id}`)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
    }
}
export const getOneUser=(id)=>async(dispatch)=>{
    try {
      const res=await axios.get(`/users/user/${id}`) 
      dispatch({
        type:GETUSER,
        payload:res.data
      }) 
    } catch (error) {
        console.log(error)  
    }
}
export const updateUser=(id,data)=>async(dispatch)=>{
    try {
        await axios.put(`/users/updateuser/${id}`,data)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)  
    }
}
