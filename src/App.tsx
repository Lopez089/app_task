import React, { useContext, useEffect, useState } from 'react'

import { FormTask } from './components'
import './App.css'
import { task, taskState } from './interface'
import { actionType } from './interface/state/action'
import { Context } from './store/store'
import { useFetch } from './hook'
import { formNewTask } from './data/formNewTask'

const stateFormValue: any = {
  state: 'idle',
  onChange: {
    valueTask: 3123,
    valueFolder: 1231
  }
}

function handleSubmit (e, setStateForm) {
  e.preventDefault()
  setStateForm((oldValue) => ({ ...oldValue, state: 'loading' }))
  let valueTask = e.target.Task.value
  let valueFolder = e.target.Folder.value

  if (valueTask === '') { valueTask = null }
  if (valueFolder === '') { valueFolder = null }

  setStateForm(oldValue => ({ state: 'success', onChange: { valueTask, valueFolder } }))
}

const App = (): JSX.Element => {
  const [stateForm, setStateForm] = useState(stateFormValue)
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
        <FormTask data={formNewTask} handleSubmit={(e) => { handleSubmit(e, setStateForm) }} state={stateForm.state} onChange={stateForm.onChange} />
      </div>
    </>
  )
}

export default App
