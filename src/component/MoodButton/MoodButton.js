import * as S from "./styles"

const MoodButton = ({text, backgroundColor, name, onMoodChange}) => {
  return (
    <S.Button backgroundColor={backgroundColor} name={name} onClick={onMoodChange}>{text}</S.Button>
  )
}

export default MoodButton