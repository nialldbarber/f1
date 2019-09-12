import styled from 'styled-components'

export const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 470px;
  overflow: hidden;
  opacity: 0;
  border-radius: 2px;
  background: ${props => props.theme.white};
  transition: opacity 0.2s ease;
  box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
    0 3px 7px -3px rgba(0, 0, 0, 0.3);
  z-index: -4;

  &.active {
    opacity: 1;
    z-index: 9;
  }

  h2 {
    background: ${props => props.theme.brightGreen};
    color: ${props => props.theme.white};
    margin: 0;
    padding: 2rem;
    text-align: center;
  }

  form {
    padding: 3rem;
    height: 100%;

    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;

      input {
        width: 351px;
      }
    }
  }
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`
