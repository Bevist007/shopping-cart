import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Main from "./Main";

firebase.initializeApp({
  apiKey: "AIzaSyCWo7l93UG8rZYLArnXlp7-tjZubrxiiZM",
  authDomain: "shopping-cart-7a2a8.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <header>Welcome {firebase.auth().currentUser.displayName}</header>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            <Main />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
