import React from 'react'
import { task, IListTasks } from '../../interface'
import { wrapperTaskData } from '../../data/notes'

export const ListTasks = ({ data, state }: IListTasks): JSX.Element => {
  if (state === 'loading') { return <p>{wrapperTaskData.loadinData}</p> }
  if (state === 'error' && (data == null)) { return <p>{wrapperTaskData.messageError}</p> }
  if (data == null) { return <p>{wrapperTaskData.listEmpyTask}</p> }

  return (
    <>
      {
        data.map((task: task) => {
          return (<h1 key={task.id}>{task.task}</h1>)
        })
      }
    </>
  )
}
