import React, { createContext, useReducer } from 'react'

import { taskState, taskAction, task } from '../interface'
import { taskReducer } from './reducer'

const initialState: taskState<task[]> = {
  state: 'idle',
  data: null,
  error: null
}

export const Context = createContext<[state: taskState<task[]>, dispatch: React.Dispatch<taskAction>]>([initialState, () => { }])

interface store {
  children: React.ReactNode
}

export const Store = ({ children }: store): JSX.Element => {
  const [state, dispatch] = useReducer((state: taskState<task[]>, action: taskAction) => taskReducer(state, action), initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}
