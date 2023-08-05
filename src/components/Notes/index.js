// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesBgContainer,
  NotesHeading,
  NotesContainer,
  NotesInput,
  Textarea,
  NotesButton,
  NotesResponsive,
  NotesImage,
  NotesImageContainer,
  ImageTitle,
  ImageDesc,
  ItemBgContainer,
} from './styledComponents'

function Notes() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [state, setState] = useState([])
  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeDescription = e => {
    setDesc(e.target.value)
  }

  const onClickAdd = e => {
    e.preventDefault()
    const notes = {id: uuidv4(), title, desc}
    setState(prevState => [...prevState, notes])
    setTitle('')
    setDesc('')
  }

  return (
    <NotesBgContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesResponsive>
        <NotesContainer>
          <NotesInput
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <Textarea
            placeholder="Take a Note..."
            value={desc}
            onChange={onChangeDescription}
          />
          <NotesButton type="submit" onClick={onClickAdd}>
            Add
          </NotesButton>
        </NotesContainer>
      </NotesResponsive>

      {state.length === 0 ? (
        <NotesImageContainer>
          <NotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <ImageTitle>No Notes Yet</ImageTitle>
          <ImageDesc>Notes you add will appear here</ImageDesc>
        </NotesImageContainer>
      ) : (
        <ItemBgContainer>
          {state.map(each => (
            <NoteItem key={each.id} itemDetails={each} />
          ))}
        </ItemBgContainer>
      )}
    </NotesBgContainer>
  )
}
export default Notes
