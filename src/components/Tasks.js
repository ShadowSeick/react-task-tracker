import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle, onEdit}) => {
    const today = new Date().toDateString();

    return (
        <>
            {orderByDate(tasks)
                .filter((task) => today !== new Date(task.objectDate).toDateString())
                .map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
            ))}
        </>
    )
}

const orderByDate = (tasks) => {
    return tasks.sort((taskA, taskB) => {
        let taskA_Date = new Date(taskA.objectDate);
        let taskB_Date = new Date(taskB.objectDate);
        taskA_Date = [taskA_Date.getFullYear(), taskA_Date.getMonth(), taskA_Date.getDate(), taskA_Date.getTime()]
        taskB_Date = [taskB_Date.getFullYear(), taskB_Date.getMonth(), taskB_Date.getDate(), taskB_Date.getTime()]
        for (let i = 0; i < taskA_Date.length; i++) {
            if (taskA_Date[i] - taskB_Date[i] !== 0) return taskA_Date[i] - taskB_Date[i];
        }
        return taskA_Date[0] - taskB_Date[0];
              })
}

export default Tasks
