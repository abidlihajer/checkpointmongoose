const express=require('express')
const { addUser, getAllUser, deleteUser, updateUser, getUser } = require('../controllers/userController')
const router=express.Router()

router.post('/adduser',addUser)


router.get('/allusers',getAllUser)

router.delete('/removeuser/:id',deleteUser)

router.put('/updateuser/:id',updateUser)

router.get('/user/:id',getUser)



module.exports=router