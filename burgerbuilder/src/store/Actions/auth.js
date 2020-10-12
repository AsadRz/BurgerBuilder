import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = 'AIzaSyCVeNL3nrMDYTHRjoO46IhPAAnzVIYZSo4';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (tokenId, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    tokenId,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

/**
 * (user SigninData )
 * @param {*} email for both signIn and signUp data
 * @param {*} password
 */

export const auth = (email, password, isSignUp) => {
  console.log(isSignUp);
  return (dispatch) => {
    dispatch(authStart);
    const signInData = {
      email,
      password,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    if (!isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    }
    axios
      .post(url, signInData)
      .then((res) => {
        // console.log(res.data);
        dispatch(authSuccess(res.data.tokenId, res.data.localId));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(authFail(err));
      });
  };
};
