import { listTask, task } from '../../interface'
import { wrapperTaskData } from '../../data/notes'

export const ListTasks = (({ tasks, state }: listTask) => {
    if (state === 'loading') { return <p>{wrapperTaskData.loadinData}</p> }
    if (state === 'error' && !tasks) { return <p>{wrapperTaskData.messageError}</p> }
    if (!tasks) { return <p>{wrapperTaskData.listEmpyTask}</p> }

    return (
        <>
            {
                tasks.map((task: task) => {
                    return (<h1 key={task.id}>{task.task}</h1>)
                })
            }
        </>
    )

})