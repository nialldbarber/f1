import styled from 'styled-components'

export const Heading = styled.h1`
  display: inline-flex;
  margin: 1rem;
  padding: 1rem 3rem;
  color: ${props => props.theme.offWhite};
  background: ${props => props.theme.brightGreen};
  box-shadow: ${props => props.theme.bs};
  border-radius: 2px;
  transform: skew(-7deg);
`
