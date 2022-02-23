import styled from 'styled-components'

export const BoxGridLayout = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const BoxGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
`