import { Box } from "../../../components/box"
import {GridContainer, Grid } from './HomePage.styled'
const HomePage = () => {

  return (
    <GridContainer>
      <Grid>
    <Box to="/login">Login</Box>
    <Box to="/register">Register</Box>
    </Grid>
    </GridContainer>
  )
}

export default HomePage