import styled from 'styled-components'

export const DriverRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 220px 100px 180px 170px 100px 100px 150px 1fr;
  height: 100%;

  * {
    display: flex;
    align-items: center;
    text-align: left;
    text-transform: capitalize;
  }
`
