import { FormTask } from './components'
import './App.css'

import { formValue } from './interface'

import { formNewTask } from "./data/formNewTask"
const onChange: formValue = {
  valueTask: null,
  valueFolder: null
}


function App() {
  return (
    <div className="App">
      <FormTask data={formNewTask} handleSubmit={(e) => e.preventDefault()} state='idle' onChange={onChange} />
    </div>
  )
}

export default App
