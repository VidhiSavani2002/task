import React from "react"
import { Box, Typography } from '@mui/material';
import Image1 from "../Images/Saly-2.png"
import Image2 from "../Images/Saly-3.png"
import { Outlet } from "react-router-dom";


const UserLayout = () => {
  return (
    <div>
      <div className="userlayout-main">
        <div className="firstDiv">
          <Typography className="logo" sx={{ mt: { lg: 4, md: 2 }, ml: 4 }}>
            Your Logo
          </Typography>
          <div className="image-main">
            <img src={Image1} alt="iamge" className="first-image" />
          </div>
        </div>
        <div className='second-div'>
          <div className="image-main2">
            <img src={Image2} alt="iamge" className="second-image" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default UserLayout   