import styled from 'styled-components'

export const DriverRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 220px 90px 1fr 1fr 200px 110px;
  height: 100%;

  * {
    display: flex;
    align-items: center;
    text-align: left;
    text-transform: capitalize;
  }
`
