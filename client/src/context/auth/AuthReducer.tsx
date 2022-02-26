import { Reducer } from 'react';
import {initialState, InitialState} from './AuthContext'

export type ACTIONTYPE =
  | { type: "REQUEST_LOGIN" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | {type: 'LOGOUT', payload: any}
  | {type: "LOGIN_ERROR", payload: any}


const authReducer: Reducer<InitialState, ACTIONTYPE> = (state: InitialState, action:ACTIONTYPE) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      console.log('treu')
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.username,
        token: action.payload.accessToken,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: ""
      };
 
    default:
      return state;
  }
}

export default authReducer;