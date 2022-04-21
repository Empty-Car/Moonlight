import React, { useState } from "react";
import styled from 'styled-components'

const TimeSet = () => {
  const [time, setTime] = useState(1);

  const onClickPlus = () => {
    setTime(time+1)
  }

  const onClickMinus = () => {
    setTime(time-1)
  }

  return (
    <>
    <div>{time}</div>
    <button onClick={time>=10? undefined:onClickPlus}>+1</button>
    <button onClick={time<=1? undefined:onClickMinus}>-1</button>

    </>
  )
}

export default TimeSet;