import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background: none;
  display: flex;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`
export const GamingThumbnailImage = styled.img`
  height: 300px;
  width: 100vw;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-size: 15px;
  color: ${props => props.color};
`

export const GamingViewsAndDate = styled.p`
  font-size: 15px;
  color: ${props => props.color};
`
