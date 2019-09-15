import styled from 'styled-components'

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  input {
    width: 240px;
    color: #72767a;
    transition: width ${props => props.theme.time}
      ${props => props.theme.effect};
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 27px;
    height: 27px;
    opacity: 0;
    transition: opacity 0.1s ${props => props.theme.effect};
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  &.active {
    input {
      width: 350px;
    }
  }
`
