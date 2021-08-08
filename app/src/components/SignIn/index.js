import React, { useState }  from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function SingIn() {

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const onSignIn = () => {
        axios.post("http://localhost:3001/signin", {
            username,
            password
        })
        .then((response) => {
            console.log("SIGN IN SUCCESS: ", response);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const isSignInDisabled = !username && !password;

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField 
                required 
                id="username" 
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
             <TextField
                required
                id="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={onSignIn} 
                disabled={isSignInDisabled} 
            >
                Sign In
            </Button>
        </div>
    )
}