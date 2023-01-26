import React, { useContext, useEffect } from 'react'
import { WrapperForm } from './components'
import './App.css'
import { task } from './interface'
import { actionType } from './interface/state/action'
import { Context } from './store/store'
import { useFetch } from './hook'

const App = (): JSX.Element => {
  const [state, dispatch] = useContext(Context)
  const stateFetch = useFetch('http://localhost:3000/tasks/')

  useEffect(() => {
    dispatch({ type: actionType.initialState, payload: stateFetch })
  }, [stateFetch])

  if (state.state === 'idle' || state.state === 'error') {
    return <h4>error</h4>
  }
  if (state.state === 'loading') {
    return <h4>...loading</h4>
  }

  return (
    <>
      <ul>
        {
          (state.data == null
            ? <p>Agrege una nueva nota</p>
            : state.data.map((task: task) => {
              return (
                <li key={task.id}>
                  <h3>{task.task}</h3>
                  <h6>{task.folder}</h6>
                </li>
              )
            }))

        }

      </ul>
      <div className="App">
        <WrapperForm />
      </div>
    </>
  )
}

export default App
