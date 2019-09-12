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
  padding: 4rem;
`

export const DriverHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 90px 1fr 1fr 110px;

  p {
    font-weight: bold;
    width: calc(100% / 4);
  }
`
