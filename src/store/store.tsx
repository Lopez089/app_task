import { createContext, useReducer } from 'react'
import { listTask } from '../interface'

const initialState = {
    state: 'idle',
    tasks: null,
    error: null
}

interface action {
    type: string,
    payload: any

}

interface contextValue {
    state: listTask
    dispatch: action
}

export const Context = createContext<[state: listTask, dispatch: React.Dispatch<action>]>([initialState, () => { }])
console.log("🚀 ~ file: store.tsx:22 ~ Context", Context)


interface store {
    children: React.ReactNode;
}


export const Store = ({ children }: store) => {

    const [state, dispatch] = useReducer((state: listTask, action): listTask => {
        switch (action.type) {
            case 'initialState':
                return action.payload
            default:
                return state
        }
    }, initialState)


    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}