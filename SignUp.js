import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../actions/userActions";

// Importing Header, Footer and Copyright
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://media.istockphoto.com/vectors/online-education-vector-id960268208)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: "100%",
    // width: "40%",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp({ history }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showEnterOtp, setShowEnterOtp] = useState(false);
  const [showSendOtpButton, setShowSendOtpButton] = useState(true);
  const [showResendOtpButton, setShowResendOtpButton] = useState(false);
  const [showVerifyOtpButton, setShowVerifyOtpButton] = useState(true);
  const [enteredOtp, setEnteredOtp] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [showMobileSendOtpButton, setshowMobileSendOtpButton] = useState(true);
  const [showResendMobileOtpButton, setshowResendMobileOtpButton] =
    useState(false);
  const [enteredMobileOtp, setenteredMobileOtp] = useState(0);
  const [showEnterMobileOtp, setshowEnterMobileOtp] = useState(false);
  const [showVerifyMobileOtpButton, setshowVerifyMobileOtpButton] =
    useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userRegisterInfo } = userRegister;

  useEffect(() => {
    if (userRegisterInfo) {
      history.push("/signin");
    }
  }, [userRegisterInfo, history]);

  const sendOtpClickHandler = () => {
    // console.log("Hello");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // courseId: match.params.id,
        email: email,
      }),
    };
    // setPublicIdd(response.data.secure_url);
    fetch(`http://localhost:8080/otp/sendEmail`, requestOptions)
      .then((response) => {
        response.json();
        if (response.status === 200) {
          setShowEnterOtp(true);
          setShowSendOtpButton(false);
          setShowResendOtpButton(true);
          alert("Otp has been sent to your email address");
        } else {
          alert("Error in sending otp.");
        }
      })
      .then((response) => {
        // response.json();
        console.log(response);
      });
  };

  const verifyOtpClickHandler = () => {
    console.log(enteredOtp);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // courseId: match.params.id,
        email: email,
        otpCode: enteredOtp,
      }),
    };
    // setPublicIdd(response.data.secure_url);
    fetch(`http://localhost:8080/otp/checkOtp`, requestOptions)
      .then((response) => {
        // console.log(response.json());
        response.json();
        if (response.status === 200) {
          setShowPassword(true);
          setShowSendOtpButton(false);
          setShowVerifyOtpButton(false);
          setShowResendOtpButton(false);
          alert("Otp has been verified");
        } else {
          alert("Please retry verification of otp.");
        }
      })
      .then((response) => {
        // response.json();
        console.log(response);
      });
  };

  const sendMobileOtpClickHandler = () => {
    // console.log(mobileNumber);
    // setshowResendMobileOtpButton(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // courseId: match.params.id,
        mobileNumber: mobileNumber,
      }),
    };
    // setshowEnterMobileOtp(true);
    // setshowVerifyMobileOtpButton(true);
    // setshowMobileSendOtpButton(false);
    // setshowResendMobileOtpButton(true);
    // alert("Mobile number has been verified");
    fetch(`http://localhost:8080/otp/sendMobileOtp`, requestOptions)
      .then((response) => {
        // console.log(response.json());
        response.json();
        if (response.status === 200) {
          setshowEnterMobileOtp(true);
          setshowVerifyMobileOtpButton(true);
          setshowMobileSendOtpButton(false);
          setshowResendMobileOtpButton(true);
          alert("Otp has been sent to mobile number");
        } else {
          alert("Please retry verification of mobile number.");
        }
      })
      .then((response) => {
        // response.json();
        console.log(response);
      });
  };

  const verifyMobileOtpClickHandler = () => {
    console.log(enteredOtp);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // courseId: match.params.id,
        mobileNumber: mobileNumber,
        otpCode: enteredMobileOtp,
      }),
    };
    // setPublicIdd(response.data.secure_url);
    fetch(`http://localhost:8080/otp/checkMobileOtp`, requestOptions)
      .then((response) => {
        // console.log(response.json());
        response.json();
        if (response.status === 200) {
          setShowEmail(true);
          setshowEnterMobileOtp(false);
          setshowVerifyMobileOtpButton(false);
          setshowResendMobileOtpButton(false);
          alert("Mobile number has been verified");
        } else {
          alert("Please retry verification of mobile number.");
        }
      })
      .then((response) => {
        // response.json();
        console.log(response);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   //dispatch
    //   dispatch(register(name, email, password));
    // }
    dispatch(register(name, email, password, mobileNumber));
  };

  return (
    <>
      <Header />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate onSubmit={submitHandler}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobileNumber"
                label="Enter Mobile Number"
                name="mobileNumber"
                autoComplete="mobileNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              {showMobileSendOtpButton === true ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={sendMobileOtpClickHandler}
                >
                  Send OTP on mobile
                </Button>
              ) : (
                <p></p>
              )}
              {showResendMobileOtpButton === true ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={sendMobileOtpClickHandler}
                >
                  Resend OTP on mobile
                </Button>
              ) : (
                <p></p>
              )}
              {showEnterMobileOtp === true &&
              showVerifyMobileOtpButton === true ? (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="enteredOtp"
                    label="Enter OTP"
                    name="enteredOtp"
                    autoComplete="enteredOtp"
                    onChange={(e) => setenteredMobileOtp(e.target.value)}
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={verifyMobileOtpClickHandler}
                  >
                    Verify OTP
                  </Button>
                </>
              ) : (
                <p></p>
              )}
              {showEmail === true ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p></p>
              )}

              {showSendOtpButton === true && showEmail === true ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={sendOtpClickHandler}
                >
                  Send OTP
                </Button>
              ) : (
                <p></p>
              )}
              {showResendOtpButton === true ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={sendOtpClickHandler}
                >
                  Resend OTP
                </Button>
              ) : (
                <p></p>
              )}

              {showEnterOtp === true && showVerifyOtpButton === true ? (
                <>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="enteredOtp"
                    label="Enter OTP"
                    name="enteredOtp"
                    autoComplete="enteredOtp"
                    onChange={(e) => setEnteredOtp(e.target.value)}
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={verifyOtpClickHandler}
                  >
                    Verify OTP
                  </Button>
                </>
              ) : (
                <p></p>
              )}

              {showPassword === true ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <p></p>
              )}

              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Grid item>
                Already a user?&nbsp;
                <Link to={"/signin"}>Sign In</Link>
                {/* <Link href="#" variant="body2">
                  
                </Link> */}
              </Grid>
              {showPassword === true ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              ) : (
                <p></p>
              )}
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default SignUp;
