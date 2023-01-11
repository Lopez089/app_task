import { createContext, useReducer } from 'react'
import { taskState, taskAction } from '../interface'
import { taskReducer } from './reducer'

const initialState: taskState = {
    state: 'idle',
    tasks: null,
    error: null
}

export const Context = createContext<[state: taskState, dispatch: React.Dispatch<taskAction>]>([initialState, () => { }])

interface store {
    children: React.ReactNode;
}

export const Store = ({ children }: store) => {

    const [state, dispatch] = useReducer((state: taskState, action: taskAction) => taskReducer(state, action), initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}