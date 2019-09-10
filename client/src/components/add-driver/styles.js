import styled from 'styled-components'

export const FormContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 0;
  width: 600px;
  overflow: hidden;
  background: ${props => props.theme.white};
  transition: height ${props => props.theme.time} ${props => props.theme.effect};
  box-shadow: ${props => props.theme.bs};

  &.active {
    height: 400px;
  }

  form {
    padding: 3rem;
  }
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`
