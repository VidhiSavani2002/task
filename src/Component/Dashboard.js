import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   const navigate = useNavigate()
   const user = JSON.parse(localStorage.getItem("user"))
   const handleLogout = () => {
      localStorage.removeItem("user")
      navigate("/")
   }
   return (
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
         <Box>Welcome {user?.name}</Box>
         <Button onClick={handleLogout}>Log Out</Button>
      </Box>
   )
}

export default Dashboard