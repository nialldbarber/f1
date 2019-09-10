import styled from 'styled-components'

export const DriverTable = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 50px;
  align-items: center;
  text-align: left;
`

export const DriverHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 250px;

  p {
    font-weight: bold;
    width: calc(100% / 4);
  }
`
