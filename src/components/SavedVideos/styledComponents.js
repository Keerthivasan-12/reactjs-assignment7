import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
`
export const SavedTitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideosImage = styled.img`
  width: 450px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.noteColor};
  text-align: center;
`
