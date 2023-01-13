import { taskState, task } from '../../'

export interface IListTasks extends Omit<taskState<task[]>, 'error'> { }
