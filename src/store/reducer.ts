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
      console.log(action)
      return { ...state, data: [...(state.data as []), action.payload] }
    default:
      return state
  }
}
