import { useEffect, useState } from 'react';
import { task } from '../../interface'

interface IStateFetch<T> {
    state: 'idle' | 'loading' | 'error' | 'success',
    data: null | T[]
    error: null | Error
}

export const useFetch = (url: string) => {
    const [stateFetch, setStateFetch] = useState<IStateFetch<task[]>>({
        state: 'idle',
        data: null,
        error: null
    })

    useEffect(() => {

        const getData = async () => {
            try {
                setStateFetch((oldValue) => ({ ...oldValue, state: 'loading' }))
                const res = await fetch(url)

                if (!res.ok) {
                    setStateFetch({
                        state: "error",
                        data: null,
                        error: Error()
                    })
                }

                const data = await res.json()

                setStateFetch({
                    state: 'success',
                    data: data,
                    error: null
                })
            } catch (e) {
                setStateFetch({
                    state: 'error',
                    data: null,
                    error: Error()
                })
            }

        }
        getData()



    }, [url])


    return stateFetch
}

export type { IStateFetch } 