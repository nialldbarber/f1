import styled from 'styled-components'

export const DriverTable = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 50px;
  align-items: center;
  text-align: left;
  background-color: ${props => props.theme.white};
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
  padding: 2rem 4rem 3rem;
`

export const DriverHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.white};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 220px 100px 180px 170px 100px 100px 150px 1fr;
  height: 100%;

  * {
    display: flex;
    align-items: center;
    text-align: left;
  }
`
