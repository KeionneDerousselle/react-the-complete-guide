import React, { useState } from 'react'
import styles from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import AuthContext from '../context/auth-context'

const App = props => {
  // the second param that updates the state DOES NOT MERGE the state, but replaces it
  const [peopleState, setPeople] = useState({
    people: [
      { id: 1, name: 'Keionne', age: 26 },
      { id: 2, name: 'Darrius', age: 26 },
      { id: 3, name: 'Kassi', age: 43 }
    ],
    showPeople: true,
    otherState: 'some other value'
  })

  const [authState, setAuthState] = useState({
    authenticated: false
  })

  // or you can make multiple calls to useState to encapsulate other state
  // const [moreState, setMoreState] = useState({
  //   foo: 'bar',
  //   bar: 'baz'
  // })

  const deletePersonHandler = id => {
    const people = peopleState.people.filter(person => person.id !== id)
    setPeople({
      people,
      showPeople: peopleState.showPeople,
      otherState: peopleState.otherState
    })
  }

  const nameChangedHandler = (event, id) => {
    const people = peopleState.people.map(person => {
      if (person.id !== id) return person
      return {
        ...person,
        name: event.target.value,
      }
    })

    setPeople({
      people,
      // you must copy all other state you want to keep, it will NOT be merged
      showPeople: peopleState.showPeople,
      otherState: peopleState.otherState
    })
  }

  const toggleShowPeopleHandler = () => {
    setPeople({
      people: peopleState.people,
      showPeople: !peopleState.showPeople,
      otherState: peopleState.otherState
    })
  }

  const loginHandler = () => {
    setAuthState({
      authenticated: true
    })
  }

  const people = peopleState.showPeople ?
    <People
      people={peopleState.people}
      onClick={deletePersonHandler}
      onChange={nameChangedHandler}/> : null

  return (
    <div className={styles.App}>
      <AuthContext.Provider value={{ authenticated: authState.authenticated, login: loginHandler}}>
        <Cockpit
          numberOfPeople={peopleState.people.length}
          showPeople={peopleState.showPeople}
          onToggle={toggleShowPeopleHandler}
          onLoginClick={loginHandler}/>
        <ErrorBoundary>
          {people}
        </ErrorBoundary>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

