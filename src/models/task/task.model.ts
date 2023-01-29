export interface task {
  task: string
  state: 'done' | 'pause' | 'inProgress' | 'complete'
  folder: string
  id: string
  idUser: string
}
