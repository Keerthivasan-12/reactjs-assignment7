import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Title = styled.p`
  font-size: 15px;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-size: 13px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
