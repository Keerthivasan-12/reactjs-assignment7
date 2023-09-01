import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  min-height: 100vh;
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const TitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
