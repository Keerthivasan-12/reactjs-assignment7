import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0 rgba(0 0 0, 0.2);
  width: 350px;
`
export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #f4f;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  color: #fff;
`

export const SubmitError = styled.p`
  font-size: 12px;
  color: #ff0b37;
`

export const InputLabel = styled.label`
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  border: 1px solid #94a3b8;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  color: #1e293b;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
`
