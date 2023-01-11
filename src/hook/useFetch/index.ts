import { useEffect, useState } from 'react';
import { task, taskState } from '../../interface'

export const useFetch = (url: string) => {
    const [stateFetch, setStateFetch] = useState<taskState<task[]>>({
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