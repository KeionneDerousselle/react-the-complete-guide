import React from 'react'
import Person from '../Person/Person'

const people = ({ people, onClick, onChange }) =>
  people.map((p) => (
    <Person
      key={p.id}
      name={p.name}
      age={p.age}
      onClick={() => onClick(p.id)}
      onChange={event => onChange(event, p.id)} />
  )
)

export default people