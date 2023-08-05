// Style your elements here
import styled from 'styled-components'

export const NotesBgContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  width:90vh
  font-family: 'Roboto';
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`
export const NotesHeading = styled.h1`
  font-size: 30px;
  color: #4c63b6;
  font-weight: 500;
  font-family: Bree Serif;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const NotesResponsive = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const NotesContainer = styled.div`
  background-color: #ffffff;
  width: 700px;
  padding: 10px;
  border: solid transparent;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0.2, 0.2, 0.2, 0.2);
  display: flex;
  flex-direction: column;
`
export const Textarea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 4px;
`

export const NotesInput = styled.input`
  outline: none;
  border: none;
  padding: 10px;
`
export const NotesButton = styled.button`
  background-color: #4c63b6;
  color: #cbd5e1;
  font-family: 'Roboto';
  padding: 10px;
  align-self: flex-end;
  border-radius: 3px;
  margin: 10px;
  border: transparent;
  cursor: pointer;
`
export const NotesImageContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  margin-top: 20px;
`
export const NotesImage = styled.img`
  background-size: cover;
  height: 150px;
  width: 150px;
`
export const ImageTitle = styled.h1`
  font-family: roboto;
  font-size: 20px;
  color: #4c63b6;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ImageDesc = styled.p`
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const ItemBgContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
`
