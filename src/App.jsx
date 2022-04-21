import React, {useState} from 'react'
import MovingCircle from './component/MovingCircle';
import TimeSet from './component/TimeSet';

const App = () => {
  const [isStart, setIsStart] = useState(false)

  const onClickStart = () => {
    setIsStart(true)
  }

  const onClickStop = () => {
    setIsStart(false)
  }

  return (
    <>
    {isStart&&(<MovingCircle></MovingCircle>)}
    <button onClick={onClickStart}>명상 시작</button>
    <button onClick={onClickStop}>명상 멈춰</button>

    <TimeSet></TimeSet>
  </>)
}

export default App;