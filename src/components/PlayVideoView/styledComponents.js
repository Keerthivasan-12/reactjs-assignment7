import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`

export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoStatus = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`
export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2563eb;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  color: #2563eb;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
