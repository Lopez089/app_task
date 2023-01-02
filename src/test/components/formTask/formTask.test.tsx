import { describe, it, vi, expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { FormTask } from '../../../components/index'
import { formNewTask } from '../../../data/formNewTask'
import { formValue } from '../../../interface'

const handleSubmit = vi.fn()

describe('formTask', () => {

    it('deberia mostro un formulario con dos input text, task and folder', () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='idle' onChange={onChange} />)
        screen.getByText(formNewTask.labelTask)
        screen.getByPlaceholderText(formNewTask.placehoderTask)
        screen.getByText(formNewTask.labelFolder)
        screen.getByPlaceholderText(formNewTask.placehoderFolder)

    })
    it('deberia mostra un titulo del formulario', () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='idle' onChange={onChange} />)
        screen.getByText(formNewTask.title)
    })
    it('deberia mostra un boton crear y deberia ejecutarser al hacer click', () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='idle' onChange={onChange} />)
        const button = screen.getByText(formNewTask.submitButton)
        fireEvent.click(button)
        fireEvent.click(button)
        expect(handleSubmit).toHaveBeenCalledTimes(2)

    })
    it('deberia mostrar una alerta de la tarea se creo con exito', () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='success' onChange={onChange} />)
        screen.getByText(formNewTask.createSuccess)
    })
    it('deberia de mostrar loading...  en el botton mientras los datos se crean', () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='loading' onChange={onChange} />)
        screen.getAllByText(formNewTask.createLoading)
    })
    it('deberia mostar un error si alguno de los input esta vacio', async () => {
        const onChange: formValue = {
            valueTask: 'a',
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='idle' onChange={onChange} />)
        await screen.findByText(formNewTask.inputEmpyError)
    })
    it('deberia mostar un error si todos input esta vacio', async () => {
        const onChange: formValue = {
            valueTask: null,
            valueFolder: null
        }
        render(<FormTask data={formNewTask} handleSubmit={handleSubmit} state='idle' onChange={onChange} />)
        await screen.findByText(formNewTask.inputEmpyError)
    })
})