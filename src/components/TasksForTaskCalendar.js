import Task from "./Task";

export const TasksForTaskCalendar = ({todayTasks, onDelete, onToggle, onEdit}) => {
    return (
        <div>
            <>
                {todayTasks.sort((taskA, taskB) => new Date(taskA.objectDate).getTime() - new Date(taskB.objectDate).getTime())
                            .map((task) => (
                                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
                ))}
            </>
        </div>
    )
}

