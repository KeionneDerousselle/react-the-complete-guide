import React from 'react'
import './UserOutput.css'

const userOutput = ({ username }) => (
  <div className="UserOutput">
    <p>Username: {username}</p>
    <p>This text will be overwritten!</p>
  </div>
)

export default userOutput