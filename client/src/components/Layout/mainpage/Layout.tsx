import { Container } from "./Mainpage.styled"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
`
const Layout = ({ children }:{children: any}) => {
  return (
    <Container>
      <GlobalStyle />
      {children}</Container>
  )
}

export default Layout