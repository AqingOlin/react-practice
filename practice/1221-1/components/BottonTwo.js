import React, { useState } from 'react'

function ButtonTwo(props) {
  const [twoData, setTwoData] = useState('Two')
  return (
    <>
      <h1>ButtonTwo(oneToTwoData):{props.oneToTwoData}</h1>
      {/*子女->父母：利用父母元件傳來的setter函式來傳自己的狀態給父母*/}
      <button onClick={() => props.setChildData(twoData)}>two</button>
    </>
  )
}
export default ButtonTwo
