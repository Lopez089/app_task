import React from 'react'
import { CformNewTask } from '../../interface/index'

export const FormTask = ({ data, handleSubmit, state, onChange }: CformNewTask): JSX.Element => {
  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <h2>{data.title}</h2>
      <div>
        <label htmlFor="task">{data.labelTask}</label>
        <input type="text" name={data.labelTask} placeholder={data.placehoderTask} />
      </div>
      <div>
        <label htmlFor="folder">{data.labelFolder}</label>
        <input type="text" name={data.labelFolder} placeholder={data.placehoderFolder} />
      </div>
      {
        onChange.valueFolder === null || onChange.valueFolder === null ? <div>{data.inputEmpyError}</div> : null
      }

      {
        state === 'loading'
          ? <button>{data.createLoading}</button>
          : <button>{data.submitButton}</button>
      }

      {
        state === 'success' && data.createSuccess
      }
    </form >
  )
}
