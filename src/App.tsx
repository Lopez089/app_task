import React, { useContext, useEffect } from 'react'
import { Item, WrapperItems, Heading, SectionItems } from './components'
import './App.css'
import { task } from './interface'
// import { actionType } from './interface/state/action'
// import { Context } from './store/store'
// import { useFetch } from './hook'

const task1 = {
  task: 'hacer la cama',
  state: 'complete'
}

const listsTask1: task[] = [
  {
    task: 'hacer la cama',
    state: 'complete',
    folder: 'hogar',
    id: 'sdafasdfas',
    idUser: 'asdfasf'
  },
  {
    task: 'hacer de comer',
    state: 'complete',
    folder: 'hogar',
    id: 'sdafasdfassdafas',
    idUser: 'asdfsadfasasf'
  },
  {
    task: 'nadar',
    state: 'inProgress',
    folder: 'deporte',
    id: 'sdafasdfassdsdfasafas',
    idUser: 'asdfsadfaasdfassasf'
  }
]

const App = (): JSX.Element => {
  // const [state, dispatch] = useContext(Context)
  // const stateFetch = useFetch('http://localhost:3000/tasks/')

  // const handleRemoveTask = (id: string): void => {
  //   dispatch({ type: actionType.removeTask, payload: id })
  //   const removeTask = async (): Promise<void> => {
  //     fetch(`http://localhost:3000/tasks/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: null
  //     })
  //       .then(async res => await res.json())
  //       .catch(e => { console.error(e) })
  //   }
  //   removeTask()
  //     .then()
  //     .catch(e => { console.error(e) })
  // }
  // useEffect(() => {
  //   dispatch({ type: actionType.initialState, payload: stateFetch })
  // }, [stateFetch])

  return (
    // <WrapperItems items={listsTask1} />
    <>
      <SectionItems >
        <Heading as={'h2'}>Tareas</Heading>
        <WrapperItems items={listsTask1} />
      </SectionItems>

    </>
  )
  // if (state.state === 'idle' || state.state === 'error') {
  //   return <Item {...task1} />
  // }
  // if (state.state === 'loading') {
  //   return <h4>...loading</h4>
  // }

  // return (
  //   <>

  //     <ul>
  //       {
  //         (state.data == null

  //           : state.data.map((task: task) => {
  //             return (
  //               <li key={task.id}>
  //                 <h3>{task.task}</h3>
  //                 <h6>{task.folder}</h6>
  //                 <button onClick={() => { handleRemoveTask(task.id) }}>Eliminar</button>
  //               </li>
  //             )
  //           }))

  //       }

  //     </ul>
  //     <div className="App">
  //       <WrapperForm />
  //     </div>
  //   </>
  // )
}

export default App
