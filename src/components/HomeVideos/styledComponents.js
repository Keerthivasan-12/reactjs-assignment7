import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideoHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
`

export const VideosCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
