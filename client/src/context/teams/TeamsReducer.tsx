import {State} from './TeamsContext'
import ITeam from '../../interfaces/ITeam'

export type ACTIONTYPE =
  | { type: "GET_TEAMS", payload: ITeam[] }
  | { type: "ADD_TEAM"; payload: ITeam }
  | {type: 'GET_SQUAD', payload: any[]}

const teamsReducer = (state: State, action: ACTIONTYPE) => {
  switch(action.type) {
      case 'GET_TEAMS':
          return {
            ...state,
            teams: action.payload
          }
      case 'ADD_TEAM':
          return {
            ...state,
            teams: [...state.teams, action.payload]
          }
        case 'GET_SQUAD':
          return {
            ...state,
            squad: [...state.squad, action.payload]
          }

      default:
          return state;
  }
}
export default teamsReducer;