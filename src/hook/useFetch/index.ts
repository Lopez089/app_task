import { useEffect, useState } from 'react'
import { task, taskState } from '../../interface'

export const useFetch = (url: string): taskState<task[]> => {
  const [stateFetch, setStateFetch] = useState<taskState<task[]>>({
    state: 'idle',
    data: null,
    error: null
  })

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        setStateFetch((oldValue) => ({ ...oldValue, state: 'loading' }))
        const res = await fetch(url)

        if (!res.ok) {
          setStateFetch({
            state: 'error',
            data: null,
            error: Error()
          })
        }

        const data = await res.json()

        setStateFetch({
          state: 'success',
          data,
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
      .then().catch((e) => { console.error(e) }
      )
  }, [url])

  return stateFetch
}
