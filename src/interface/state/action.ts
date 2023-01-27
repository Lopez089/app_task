import { task } from '..'
import { IStateFetch } from '../../hook/useFetch/index'
import { INewTask } from '../components/listTasks/index'

export enum actionType {
  initialState,
  addTask,
  removeTask
}

export interface initialState {
  type: actionType.initialState
  payload: IStateFetch<task[]>
}

export interface addTask {
  type: actionType.addTask
  payload: INewTask
}

export interface removeTask {
  type: actionType.removeTask
  payload: string
}

export type taskAction = initialState | addTask | removeTask
