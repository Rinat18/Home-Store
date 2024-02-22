import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContextPrvider";

export default function AdminPage() {
  const {
    user,
    email,
    password,
    hasAccount,
    emailError,
    passwordError,
    setHasAccount,
    setUser,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogIn,
  } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {hasAccount ? "Login Form" : "Register Now"}
          </Typography>
          <Box
            onSubmit={handleSubmit}
            noValidate
            component="form"
            sx={{ mt: 1 }}
          >
            {" "}
            <TextField
              helperText={emailError}
              label="Email Address"
              name="email"
              autoFocus
              fullWidth
              autoComplete="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={passwordError}
              fullWidth
              margin="normal"
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleLogIn}
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleRegister}
                sx={{ mt: 3, mb: 2 }}
              >
                Register Now
              </Button>
            )}
            <Grid container>
              <Grid item>
                <Typography
                  variant="body2"
                  onClick={() => setHasAccount(!hasAccount)}
                  sx={{ cursor: "pointer", textDecoration: "undefined" }}
                >
                  {" "}
                  {hasAccount
                    ? "Dont have an account? Register Now"
                    : "Already an account? Login"}
                </Typography>
              </Grid>
              <Copyright sx={{ mt: 0, mb: 0 }} />
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
