import styled from 'styled-components'

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  input {
    transition: width ${props => props.theme.time}
      ${props => props.theme.effect};
  }
`
