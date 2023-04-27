import React, { useState } from "react"
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Data from "./RagisterData"



const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = Data
        const user = data.find((user) => user.email === email || user.name === email && user.password === password)
        if (user) {
            navigate("/dashboard")
            localStorage.setItem("user", JSON.stringify(user))
        }
        else {
            alert("Invalid User")
        }

    }

    return (
        <div className="signin-top">
            <div className="signIn-main">
                <Box sx={{ padding: "44px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ fontSize: "20px" }}>
                            Welcome to Lorem
                        </Box>
                        <Box>
                            No Account ?<br />
                            <span style={{ color: "#B87514" }} onClick={() => { navigate("/signup") }}>
                                Sign up
                            </span>
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: "55px", fontWeight: "500" }} onClick={() => { navigate("/signup") }}>
                        Sign in
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mt: 3 }}>
                            <Box>
                                <label className="input-lable">Enter your username or email address</label>
                                <input type="text" className="input-text" placeholder="Username or email address" required onChange={(e) => { setEmail(e.target.value) }} />
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <label className="input-lable">Enter your Password</label>
                                <input type="password" className="input-text" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }} />
                            </Box>
                            <Box sx={{ textAlign: "right", mt: 1, color: "#AD3113" }}>
                                Forgot Password
                            </Box>
                            <Button fullWidth variant="contained" sx={{ background: "#E48700", color: "#fff", mt: 3, pt: 2, pb: 2 }} type="submit">Sign In</Button>
                            <Typography sx={{
                                textAlign: "center", mt: 3, mb: 3
                            }}>OR</Typography>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ p: 2, background: "#FFF4E3" }}>Sign in with Google</Typography>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default SignIn