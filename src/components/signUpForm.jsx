// Sign-up template from https://material-ui.com/getting-started/templates/

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";

import styles from "./css/signUpForm.module.css";

class submitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Form state
      firstName: "",
      lastName: "",
      email: "",
      major: "",
      allergy: "",
      isGoing: false,
      shirtSize: "none",
      fileName: "",
      // Dynamic component rendering
      showCheckbox: false,
      // showShirtOption: false,
    };

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
  }

  // Function used to send uploaded file information to the state
  onChange = (e) => {
    this.setState({ fileName: e.target.files[0] });
  };

  // Send values from the text-field to a state object
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    // Check if '@students.calvin.edu' is contained in email text
    if (e.target.name === "email") {
      if (e.target.value.includes("@students.calvin.edu")) {
        this.setState({
          showCheckbox: true,
        });
      } else {
        this.setState({
          isGoing: false,
          showCheckbox: false,
          // showShirtOption: false,
          // shirtSize: "none",
        });
      }
    }
  };

  // Function used to update checkbox value
  updateCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
      // showShirtOption: e.target.checked,
    });
    // if (!e.target.checked) {
    //   this.setState({
    //     shirtSize: "none",
    //   });
    // }
  };

  // Sending information to the firebase
  addUser = (e) => {
    e.preventDefault();
    let noError = true;

    // Initialize firebase DB and storage
    const storage = firebase.storage().ref();
    const db = firebase.firestore();

    // Change firestore settings
    // TODO: fix error with "FirebaseError: Firestore has already been started
    //        and its settings can no longer be changed.""
    // db.settings({
    //   timestampsInSnapshots: true
    // });

    // Send information in the state object to the firebase
    db.collection("calvinhacks2021")
      .doc(this.state.email)
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        major: this.state.major,
        allergy: this.state.allergy,
        isGoing: this.state.isGoing,
        // shirtSize: this.state.shirtSize,
      })
      .catch((error) => {
        noError = false;
        alert("This e-mail address has already been used!"); // Catches duplicate e-mail address
      })
      // Give an alert when successfully registered
      .finally(() => {
        if (noError) {
          alert("Thank you for signing up for CalvinHacks 2021!")
        }
      });

    // upload files to the firebase storage
    if (this.state.fileName !== "") {
      // Checks if user has uploaded any files
      const file = this.state.fileName;
      let date = new Date();
      let numSeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
      let hash = Math.floor(Math.random() * numSeconds);
      const fileRef = storage.child(hash + "_" + file.name);
      fileRef.put(file).then((snapshot) => {
        alert("Resume successfully uploaded!");
      });
    }

    // Resets state object after sending information to the firebase
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      major: "",
      allergy: "",
      isGoing: false,
      // shirtSize: "none",
      fileName: "",
      showCheckbox: false,
      // showShirtOption: false,
    });
    // if(noError){
    //   alert("Thank you for signing up for CalvinHacks 2021!")
    // }

  };

  // Adding resume only to allow user to upload file without sign-up
  addResume = e => {
    e.preventDefault()

    const storage = firebase.storage().ref();

    // upload files to the firebase storage
    if (this.state.fileName !== ''){ // Checks if use have uploaded any files
      const file = this.state.fileName;
      let date = new Date();
      let numSeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
      let hash = Math.floor(Math.random() * numSeconds);
      const fileRef = storage.child(hash + "_" + file.name);
      fileRef.put(file).then((snapshot) => {
        alert("Resume successfully uploaded!")
      })
    }

    this.setState({
      fileName: ''
    });
  };

  makeStyles = (theme) => ({
    container: {
      marginBottom: "3rem",
    },
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
    shirtChoice: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

  render() {
    return (
      <div className={styles.formContainer}>
        <Container className={makeStyles.container} component="main" maxWidth="xs">
          <CssBaseline />
          <div className={makeStyles.paper}>
            {/* <Typography component="h1" variant="h5">
              Sign Up
            </Typography> */}
            <h1 className={styles.signUpTitle}>Sign Up</h1>
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
                    onChange={this.updateInput}
                    value={this.state.firstName}
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
                    onChange={this.updateInput}
                    value={this.state.lastName}
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
                    onChange={this.updateInput}
                    value={this.state.email}
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
                    onChange={this.updateInput}
                    value={this.state.major}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="allergy"
                    label="Allergies"
                    id="allergy"
                    onChange={this.updateInput}
                    value={this.state.allergy}
                  />
                </Grid>

                {this.state.showCheckbox && (
                  <>
                    <Grid item>
                      <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.updateCheckbox}
                      />
                    </Grid>
                    <Grid item>
                      <p>I would like to attend CalvinHacks in-person.</p>
                    </Grid>
                  </>
                )}

                {/* Shirt size option for future hackathons! */}
                {/* {this.state.showShirtOption && (
                  <>
                    <Grid item>
                      <p>Select a shirt size (adult unisex sizes only):</p>
                    </Grid>
                    <Grid item>
                      <select name="shirtSize" id="shirtSize" onChange={this.updateInput}>
                        <option value="none"></option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="x-large">XL</option>
                      </select>
                    </Grid>
                  </>
                )} */}

                <Grid item>
                  <p>Optional: Upload a resume for sponsors to view!</p>
                  <p>Ensure your resume has a unique identifier.</p>
                  <p>(e.g. firstName_lastName_resume.pdf)</p>
                </Grid>
                <Grid item xs={12}>
                  <input type="file" onChange={this.onChange} />
                </Grid>
                <Grid item xs={12} />
              </Grid>
              <Button
                style = {{marginBottom: 8}}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={makeStyles.submit}
                onClick={this.addUser}
              >
                Submit Form
              </Button>
              <Button
                m={1}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={makeStyles.submit}
                onClick={this.addResume}
              >
                Upload Resume Only
              </Button>

            </form>
          </div>
        </Container>
        <div className={styles.spaceDiv} />
      </div>
    );
  }
}

export default submitForm;
