import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const HeaderLogo = styled.img`
  height: 40px;
  width: 80px;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  padding: 8px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 150px;
  background-color: '#fff';
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  padding: 10px;
  color: gray;
  margin: 12px;
  outline: none;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid gray;
  padding: 10px;
  color: white;
  margin: 12px;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const ModalDesc = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
