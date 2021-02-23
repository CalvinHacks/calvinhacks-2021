// Template from https://material-ui.com/getting-started/templates/ (Sign up)

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import firestore from '@firebase/firestore';
import { CheckBox } from '@material-ui/icons';
import AllergyForm from './allergyForm'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class submitForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          major: '',
          allergy: ''
        };

        // Firebase configuration setting
        const config = {
            apiKey: "AIzaSyDvYD8EsP5UEgbGoHAIeKi82gD3psi3nMw",
            authDomain: "calvinhacks-a2378.firebaseapp.com",
            databaseURL: "https://calvinhacks-a2378-default-rtdb.firebaseio.com",
            projectId: "calvinhacks-a2378",
            storageBucket: "calvinhacks-a2378.appspot.com",
            messagingSenderId: "914876604942",
            appId: "1:914876604942:web:1d8daf928674d1d78d125f",
            measurementId: "G-SNBC9SE41B"
          };
        
        // Prevent firebase from initializing twice 
        // https://stackoverflow.com/questions/54055197/firebase-react-js-firebase-firebase-app-named-default-already-exists-a
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
      } 

    updateInput = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });

        db.collection("calvinHacks2021").doc(this.state.email).set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            major: this.state.major,
            allergy: []
        }).catch((error) => {
            alert("e-mail address already exist");
        });

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            major: '',
            allergy: []
        });
      };

    makeStyles = ((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    render() {
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={makeStyles.paper}>
              <Typography component="h1" variant="h5">
                Survey
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
                      label="Calvin Email Address"
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
                      label="Alleric foods (comma separated)"
                      id="allergy"
                      onChange={this.updateInput}
                      value={this.state.major}
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={makeStyles.submit}
                  onClick={ this.addUser }
                >
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        );
    }
}

export default submitForm;

