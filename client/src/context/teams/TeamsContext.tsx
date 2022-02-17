import React, { createContext, Dispatch, useReducer } from "react";
import ITeam from '../../interfaces/ITeam'
import teamsReducer from './TeamsReducer';

interface ContextType {
  state?: any;
  dispatch?: any;
}
const TeamsContext = createContext<ContextType>({});

export interface TeamCtx {
  state?: State,
  dispatch?: Dispatch<any>
}

const initialState: State = {
  teams: []
}
export interface State {
  teams: ITeam[]
}

export const TeamsProvider:React.FC = ({children}) => {
 
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  return <TeamsContext.Provider value={{state, dispatch}}>
        {children}
    </TeamsContext.Provider>
}

export default TeamsContext;