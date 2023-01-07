import { useContext, useEffect } from 'react'
import { FormTask } from './components'
import './App.css'
import { formValue, task } from './interface'
import { Context } from './store/store'
import { useFetch } from './hook'


import { formNewTask } from "./data/formNewTask"
const onChange: formValue = {
  valueTask: null,
  valueFolder: null
}


function App() {
  const [state, dispatch] = useContext(Context)
  console.log("🚀 ~ file: App.tsx:18 ~ App ~ dispatch", dispatch)

  const stateFetch = useFetch('http://localhost:3000/tasks/')

  useEffect(() => {
    dispatch({ type: 'initialState', payload: stateFetch })
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
        {state.data.map((task: task) => {
          return (
            <li key={task.id}>
              <h3>{task.task}</h3>
              <h6>{task.folder}</h6>
            </li>
          )
        })}
      </ul>
      <div className="App">
        <FormTask data={formNewTask} handleSubmit={(e) => e.preventDefault()} state='idle' onChange={onChange} />
      </div>
    </>
  )
}

export default App
