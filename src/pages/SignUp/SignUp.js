import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import axios from "axios";
import {LoadingButton} from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "../../util/ValidateData";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

var mess = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

export default function SignUp({handleSignUp}) {
  const [signUpClick, setSignUpClick] = useState(false);
  const [errorMess, setErrorMess] = useState();

  const handleSignUpClick = () => setSignUpClick((prev) => !prev);

  const validatePasswordSignUp = (data) => {
    if (!validatePassword(data)) {
      mess = {
        ...mess,
        password: "Password must be 10-16 Characters Long.",
      };
    } else {
      mess = {...mess, password: ""};
    }
    setErrorMess(mess);
  };

  const validateEmailSignUp = (data) => {
    if (!validateEmail(data)) {
      mess = {...mess, email: "Please enter a valid email address"};
    } else {
      mess = {...mess, email: ""};
    }
    setErrorMess(mess);
  };

  const validatePhoneSignUp = (data) => {
    if (!validatePhone(data)) {
      mess = {...mess, phone: "Please enter a valid mobile phone"};
    } else {
      mess = {...mess, phone: ""};
    }
    setErrorMess(mess);
  };

  const validateNameData = (data) => {
    if (!data.firstName) {
      mess = {...mess, firstName: "Please enter your first name"};
    } else {
      mess = {...mess, firstName: ""};
    }
    if (!data.lastName) {
      mess = {...mess, lastName: "Please enter your last name"};
    } else {
      mess = {...mess, lastName: ""};
    }
    validateEmailSignUp(data.email);
    validatePasswordSignUp(data.password);
    validatePhoneSignUp(data.phone);
    setErrorMess(mess);
    return mess;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleSignUpClick();
    const signUpData = {
      email: data.get("email").toString(),
      password: data.get("password").toString(),
      firstName: data.get("firstName").toString(),
      lastName: data.get("lastName").toString(),
      phone: data.get("phone").toString(),
    };

    const errMess = validateNameData(signUpData);

    if (errMess.email || errMess.password || errMess.phone) {
      setErrorMess(errMess);
      handleSignUpClick();
      return;
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://kltn-ecommerce.herokuapp.com/api/register-email",
      headers: {
        "Content-Type": "application/json",
      },
      data: signUpData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Please check your email to verify.");
        setTimeout(() => {
          handleSignUp();
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        handleSignUpClick();
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errorMess?.firstName ? true : false}
                  helperText={errorMess?.firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errorMess?.lastName ? true : false}
                  helperText={errorMess?.lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errorMess?.email ? true : false}
                  helperText={errorMess?.email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => validateEmailSignUp(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errorMess?.phone ? true : false}
                  helperText={errorMess?.phone}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => validatePhoneSignUp(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errorMess?.password ? true : false}
                  helperText={errorMess?.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => validatePasswordSignUp(e.target.value)}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              endIcon={<SendIcon />}
              loading={signUpClick}
              loadingPosition="end"
              variant="contained"
              fullWidth
              sx={{mt: 3, mb: 2}}
            >
              <span>Sign Up</span>
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4}} />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}
