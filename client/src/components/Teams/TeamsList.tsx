import { useEffect, useContext } from 'react'
import { getTeams } from '../../context/teams/TeamsActions'
import TeamsContext from '../../context/teams/TeamsContext'
import ITeam from '../../interfaces/ITeam'
import TeamItem from './TeamItem'

const Teams = () => {
  const { state, dispatch } = useContext(TeamsContext)

  useEffect(() => {
    async function fetchTeams() {
      const teams = await getTeams();
      dispatch({ type: 'GET_TEAMS', payload: teams })
    }
    fetchTeams()
  }, [dispatch])

  return (
    <div>
      {state.teams.map((team: ITeam) => (
        <TeamItem team={team} />
      ))}</div>
  )
}

export default Teams