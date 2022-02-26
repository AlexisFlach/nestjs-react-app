import React, { createContext, Dispatch, useReducer } from "react";
import authReducer from './AuthReducer';

interface ContextType {
  state?: any;
  dispatch?: any;
}
const AuthContext = createContext<ContextType>({});

export interface InitialState {
  user: string,
  loading: boolean,
  token: string,
  errorMessage: string
}

export const initialState: InitialState = {
  user: "",
  loading: false,
  token: "",
  errorMessage: ""
}

export const AuthProvider:React.FC = ({children}) => {
 
  const [state, dispatch] = useReducer(authReducer, initialState );

  return <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;