// Template from https://material-ui.com/getting-started/templates/ (Sign up)

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
// import firestore from '@firebase/firestore';
// import { CheckBox } from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import AllergyForm from './allergyForm'

import styles from "./css/signUpForm.module.css";

// Create copyright
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUpForm(props) {
  // empty state
  const [formState, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    major: "",
    allergy: "",
    inPerson: false,
    fileName: "",
  });

  // Firebase configuration setting
  // TODO: place config. information on the separate component for the security purpose
  const config = {
    apiKey: "AIzaSyDvYD8EsP5UEgbGoHAIeKi82gD3psi3nMw",
    authDomain: "calvinhacks-a2378.firebaseapp.com",
    databaseURL: "https://calvinhacks-a2378-default-rtdb.firebaseio.com",
    projectId: "calvinhacks-a2378",
    storageBucket: "calvinhacks-a2378.appspot.com",
    messagingSenderId: "914876604942",
    appId: "1:914876604942:web:1d8daf928674d1d78d125f",
    measurementId: "G-SNBC9SE41B",
  };

  // Prevent firebase from initializing twice
  // https://stackoverflow.com/questions/54055197/firebase-react-js-firebase-firebase-app-named-default-already-exists-a
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  // Function used to send uploaded file information to the state
  const onFileUpload = (e) => {
    setState({ fileName: e.target.files[0] });
  };

  // Send values from the text-field to a state object
  const updateInput = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  // Updates "in person" checkbox value
  const handleCheck = (e) => {
    setState({ inPerson: e.target.checked });
  };

  // Sending information to the firebase
  const addUser = (e) => {
    e.preventDefault();

    // Initialize firebase DB and storage
    const storage = firebase.storage().ref();
    const db = firebase.firestore();

    // Change firestore settings
    db.settings({
      timestampsInSnapshots: true,
    });

    // Send information in the state object to the firebase
    db.collection("calvinHacks2021")
      .doc(formState.email)
      .set({
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        major: formState.major,
        allergy: formState.allergy,
        inPerson: formState.inPerson,
      })
      .catch((error) => {
        alert("e-mail address already exist"); // Catches duplicate e-mail address
      });

    // Resets state object after sending information to the firebase
    setState({
      firstName: "",
      lastName: "",
      email: "",
      major: "",
      allergy: "",
      inPerson: false,
      fileName: "",
    });

    // upload files to the firebase storage
    if (formState.fileName !== "") {
      // Checks if use have uploaded any files
      const file = formState.fileName;
      alert(file);
      const fileRef = storage.child(file.name);
      fileRef.put(file).then((snapshot) => {
        alert("file successfully uploaded");
      });
    }
  };

  const makeStyles = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={makeStyles.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={makeStyles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={updateInput}
                value={formState.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={updateInput}
                value={formState.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Student Email Address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={updateInput}
                value={formState.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="major"
                label="Major"
                id="major"
                onChange={updateInput}
                value={formState.major}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="allergy"
                label="Allergies"
                id="allergy"
                onChange={updateInput}
                value={formState.allergy}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <input
                    style={styles.checkbox}
                    name="inPerson"
                    type="checkbox"
                    checked={formState.inPerson}
                    onChange={handleCheck}
                  />
                }
                label="I would like to attend CalvinHacks in-person."
              />
            </Grid>
            <Grid item>
              <p>Upload a resume for sponsors to view!</p>
            </Grid>
            <Grid item xs={12}>
              <input type="file" onChange={onFileUpload} />
            </Grid>
            <Grid item xs={12} />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={makeStyles.submit}
            onClick={addUser}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
