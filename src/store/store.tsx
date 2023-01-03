import { createContext } from 'react'
import { listTask } from '../interface'

const initialState: listTask = {
    state: 'idle',
    tasks: null
}

export const Context = createContext(initialState)


interface store {
    children: React.ReactNode;
}

export const Store = ({ children }: store) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}