import {
  taskAction,
  task,
  taskState
} from '../interface'
import {
  actionType
} from '../interface/state/action'

export const taskReducer = (state: taskState<task[]>, action: taskAction): taskState<task[]> => {
  switch (action.type) {
    case actionType.initialState:
      return action.payload
    case actionType.addTask:
      return { ...state, data: [...(state.data as []), action.payload] }
    case actionType.removeTask:
      return { ...state, data: (state.data as task[]).filter((e) => { return e.id !== action.payload }) }

    default:
      return state
  }
}
