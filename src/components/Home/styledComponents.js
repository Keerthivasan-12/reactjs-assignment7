import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerImage = styled.img`
  height: 30px;
  width: 80px;
`
export const BannerButton = styled.button`
  padding: 5px;
  color: '#0000';
  background: none;
  border: 1px solid #0000;
`

export const BannerText = styled.p`
  font-size: 15px;
  color: #0000;
`

export const BannerCloseButton = styled.button`
  background: none;
  border: none;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  background: none;
  padding: 5px;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
