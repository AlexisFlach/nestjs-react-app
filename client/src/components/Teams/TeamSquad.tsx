import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamSquad } from '../../context/teams/TeamsActions'
import TeamsContext from '../../context/teams/TeamsContext'

const TeamSquad = () => {

  const { state, dispatch } = useContext(TeamsContext)

  const params = useParams()

  useEffect(() => {
    async function fetchSquad() {
      const teams = await getTeamSquad(params.id);
      dispatch({ type: 'GET_SQUAD', payload: teams })
    }
    fetchSquad()
  }, [dispatch])
  return (
    <div>TeamSquad</div>
  )
}

export default TeamSquad