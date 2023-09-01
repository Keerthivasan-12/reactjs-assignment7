import styled from 'styled-components'

export const FailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and(min-width: 7868px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.headingColor};
`
export const FailedNote = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4746e5;
  border-radius: 3px;
  color: #fff;
  padding: 10px;
  font-size: 115px;
`
