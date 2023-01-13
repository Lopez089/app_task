import React from 'react'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { ListTasks } from '../../components/index'
import { tasksHelper } from '../../helpers/task'
import { wrapperTaskData } from '../../data/notes'
import '@testing-library/jest-dom'

describe('Component wraperTask', () => {
  it('si no existen tareas mostrar un boton para agregar tareas nueva', () => {
    render(<ListTasks tasks={null} state={'idle'} />)
    screen.getByText(wrapperTaskData.listEmpyTask)
  })

  it('deberia motrar las teras que nos llegan por props', () => {
    render(<ListTasks tasks={tasksHelper} state={'idle'} />)
    for (const task of tasksHelper) {
      screen.getByText(task.task)
    }
  })

  it('deberia de mostrar un message de error si las notas no se cargar desde el sevidor', () => {
    render(<ListTasks tasks={null} state={'error'} />)
    const text = screen.getByText(wrapperTaskData.messageError)
    expect(text).toBeInTheDocument()
  })

  it('deberia de motrar text de carga mientras carga los datos desde el servidor', () => {
    render(<ListTasks tasks={null} state={'loading'} />)
    const text = screen.getByText(wrapperTaskData.loadinData)
    expect(text).toBeInTheDocument()
  })
})
