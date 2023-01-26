import React, { useState, useContext } from 'react'
import { actionType } from '../../../interface/state/action'
import { task } from '../../../interface/'
import { Context } from '../../../store/store'
import { v4 as uuidv4 } from 'uuid'

interface IContatsFormNewTask {
  title: string
  fields: fields[]
  button: string
}

interface fields {
  label: string
  type: string
  name: string
  placeholder: string
}

interface IFormNewTask {
  contantsFormNewTask: IContatsFormNewTask
}

interface FieldsChange {
  task: string | undefined
  folder: string | undefined
}

interface IMessage {
  type: 'error' | 'success'
  message: string | null
}

export interface INewTask extends task {
  task: string | undefined
  folder: string | undefined
}

const contantsFormNewTask: IContatsFormNewTask = {
  title: 'Agregar nueva tarea',
  fields: [
    {
      label: 'Name Task',
      type: 'text',
      name: 'task',
      placeholder: 'Ej: hacer la cama'
    },
    {
      label: 'Name Folder',
      type: 'text',
      name: 'folder',
      placeholder: 'Ej: hogar'
    }
  ],
  button: 'add task'
}

const FormNewTask = ({ contantsFormNewTask }: IFormNewTask): JSX.Element => {
  const { title, fields, button } = contantsFormNewTask
  const [message, setMessage] = useState<IMessage | null>(null)
  const [state, dispatch] = useContext(Context)
  const [fieldsChange, setFieldsChange] = useState<FieldsChange>({
    task: undefined,
    folder: undefined
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string | undefined = e.target.value
    const name: string | undefined = e.target.name
    setFieldsChange((oldValue) => ({ ...oldValue, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const newTask: INewTask = {
      task: fieldsChange.task,
      state: 'inProgress',
      folder: fieldsChange.folder,
      id: uuidv4(),
      idUser: '3234joiu42'
    }

    if ((newTask.task === undefined || newTask.task.length === 0) || (newTask.folder === undefined || newTask.folder.length === 0)) {
      setMessage({
        type: 'error',
        message: 'Introduce una tarea correcta'
      })
      setTimeout(() => { setMessage(null) }, 5000)
    } else {
      dispatch({ type: actionType.addTask, payload: newTask })

      const postTask = async (url: string): Promise<void> => {
        try {
          await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
          })
        } catch (e: any) {
          throw new Error(e.message)
        }
      }
      postTask('http://localhost:3000/tasks')
        .then(() => {
          setMessage({
            type: 'success',
            message: 'tarea creada corrctamente'
          })
          setFieldsChange({
            task: undefined,
            folder: undefined
          })
          setTimeout(() => { setMessage(null) }, 5000)
        })
        .catch((e) => {
          setMessage({
            type: 'error',
            message: e.message
          })
          setTimeout(() => { setMessage(null) }, 5000)
        })
    }
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <h3>{title}</h3>
      {
        fields.map((field, i) => {
          return (
            <div key={field.name}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={i === 0 ? fieldsChange.task : fieldsChange.folder}
                onChange={(e) => { handleChange(e) }}
              />
            </div>
          )
        })
      }
      {
        (message != null) && <p>{message.message}</p>
      }
      <button>{button}</button>
    </form>
  )
}

export const WrapperForm = (): JSX.Element => {
  return (
    <>
      <FormNewTask contantsFormNewTask={contantsFormNewTask} />
    </>
  )
}
