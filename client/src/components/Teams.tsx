import {useEffect, useContext} from 'react'
import { getTeams } from '../context/teams/TeamsActions'
import TeamsContext from '../context/teams/TeamsContext'

const Teams = () => {
  const { state, dispatch } = useContext(TeamsContext)
  
  useEffect(() => {
    async function fetchTeams() {
      const teams = await getTeams();
      dispatch({type: 'GET_TEAMS', payload: teams})
    }
    fetchTeams()
  }, [])

  return (
    <div>
      {state.teams.map((team:any) => (
        <h2>{team.name}</h2>
      ))}</div>
  )
}

export default Teams