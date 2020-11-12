import React, { useEffect, Fragment } from 'react'
import styles from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = ({ numberOfPeople, showPeople, onToggle }) => {
  // runs for every part of the lifecycle of this component
  useEffect(() => { 
    console.log('[Cockpit.js] useEffect')
    // return () => {}
    // you can use a returned function to be called after the useEffect function is called for the last time
    // you can use this to do some clean up
  }, [numberOfPeople]) // use the array to indicate which data changes should cause the useEffect function to fire

  // pass an empty array to the useEffect function if you want something to run only once on component creation

  // you can make multiple useEffect calls to listen to multiple pieces of data

  const buttonClasses = [
    styles.Button,
    styles.Green,
    ...(showPeople ? [ styles.Red ]: [])
  ].join(' ')

  const classes = [
    ...(numberOfPeople < 3 ? [styles.red] : []),
    ...(numberOfPeople < 2 ? [styles.bold] : []),
  ].join(' ')

  const toggleButtonText = showPeople ? 'Hide' : 'Show'

  // This is one way to return multiple elements without a root node
  // you must return an array with comma separated elements, each with a unique key
  // return [
  //   <h1 key="title">Hello, World!</h1>,
  //   <p key="subtitle" className={classes}>This really works!</p>,
  //   <button
  //       key="toggleButton"
  //       className={buttonClasses}
  //       onClick={onToggle}>
  //       { toggleButtonText }
  //     </button>
  // ]

  // There is one such hoc built into React directly: Fragment
  return (
    <AuthContext.Consumer>
      {
        context => (
          <Fragment>
            <h1>Hello, World!</h1>
            <p className={classes}>This really works!</p>
            <button
              className={buttonClasses}
              onClick={onToggle}>
              {toggleButtonText}
            </button>
            <button onClick={context.login}>Log in</button>
          </Fragment>
        )
      }
    </AuthContext.Consumer>
  )
}

export default React.memo(Cockpit)
