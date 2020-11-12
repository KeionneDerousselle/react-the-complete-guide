import React from 'react'

const userInput = ({ onChange, value }) => {
  const style = {
    border: '2px solid red',
  }

  return (
    <input
      type="text"
      style={style}
      onChange={onChange}
      value={value} />
  )
}

export default userInput
