import { it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hook'





describe('useFetch', () => {

    beforeEach(() => {

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve(
                        {
                            task: 'hacer la cama',
                            id: 89272346,
                            state: 'inprogress',
                            folder: 'hogar',
                            idUser: 23424
                        }
                    )

            })
        )
    })


    it('deveria de devolver los datos del servidor', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('http://localhost:3000/tasks'))

        await waitForNextUpdate()


        expect(result.current).toEqual({

            data: {
                task: 'hacer la cama',
                id: 89272346,
                state: 'inprogress',
                folder: 'hogar',
                idUser: 23424
            },
            error: null,
            state: 'success'
        })

    })
    it('mientrar carga el servidor deveria mostar loadign', () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('http://localhost:3000/tasks'))

        expect(result.current).toEqual({
            state: 'loading',
            error: null,
            data: null
        })
    })
})

describe('useFetch catch error', () => {

    beforeEach(() => {

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.prototype.catch(() => { throw new Error('') })
            }))
    })


    it('muestrar un error si la peticion falla', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('http://localhost:3000/tasks'))

        await waitForNextUpdate()

        expect(result.current).toEqual({
            data: null,
            state: 'error',
            error: Error()
        })
    })
})