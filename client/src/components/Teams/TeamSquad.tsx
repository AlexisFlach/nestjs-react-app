import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamSquad } from '../../context/teams/TeamsActions'
import TeamsContext from '../../context/teams/TeamsContext'

const TeamSquad = () => {

  const { dispatch } = useContext(TeamsContext)

  const params = useParams()

  useEffect(() => {
    async function fetchSquad() {
      const teams = await getTeamSquad(params.id);
      dispatch({ type: 'GET_SQUAD', payload: teams })
    }
    fetchSquad()
  }, [params.id, dispatch])

  return (
    <div>TeamSquad</div>
  )
}

export default TeamSquad