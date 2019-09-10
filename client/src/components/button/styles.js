import styled from 'styled-components'

export const Btn = styled.button`
  display: block;
  margin: 1rem 0 1rem auto;
  border: none;
  font-size: 1rem;
  background: ${props => props.theme.brightGreen};
  color: ${props => props.theme.white};
  height: 40px;
  line-height: 40px;
  padding: 0 1.5rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.15s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`
