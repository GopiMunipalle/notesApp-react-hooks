// Write your code here
import {ItemContainer, Title, Desc} from './styledComponents'

function NoteItem(props) {
  const {itemDetails} = props
  const {title, desc} = itemDetails
  console.log(itemDetails)

  return (
    <ItemContainer>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </ItemContainer>
  )
}
export default NoteItem
