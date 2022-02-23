import Box from '../../Box/Box'
import {BoxGrid, BoxGridLayout} from './BoxLayout.styled'
const BoxLayout = () => {
  return (
    <>
    <BoxGridLayout>
    <BoxGrid>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </BoxGrid>
    </BoxGridLayout>
    </>
  )
}

export default BoxLayout