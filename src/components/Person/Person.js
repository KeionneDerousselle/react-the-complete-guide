import React, { useEffect, useRef, useContext } from 'react'
import styles from './Person.module.css'
import PropTypes from 'prop-types'
import AuthContext from '../../context/auth-context'

const Person = ({ name, age, onClick, onChange, children }) => {
  // let inputElement
  // const inputElement = React.createRef()
  const inputElement = useRef(null)

  // useEffect(() => { 
  //   if (inputElement) {
  //     // inputElement.focus()
  //     inputElement.current.focus()
  //   }
  // }, [inputElement])

  useEffect(() => inputElement.current.focus(), [])
  
  const authContext = useContext(AuthContext)

  return (
    <div className={styles.Person}>
      <p>{authContext.authenticated ? 'Authenticated!' : 'Please log in'}</p>
      <p onClick={onClick}>I am {name} and I am {age} years old.</p>
      {children && <p>{children}</p>}
      <input
        type="text"
        // ref={inputEl => { inputElement = inputEl }}
        ref={inputElement}
        onChange={onChange} value={name} />
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default Person
