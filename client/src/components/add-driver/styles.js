import styled from 'styled-components'

export const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 360px;
  overflow: hidden;
  opacity: 0;
  background: ${props => props.theme.white};
  transition: opacity 0.2s ease;
  box-shadow: ${props => props.theme.bs};
  z-index: -4;

  &.active {
    opacity: 1;
    z-index: 9;
  }

  form {
    padding: 3rem;
  }
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`
