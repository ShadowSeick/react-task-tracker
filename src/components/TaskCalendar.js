import {TaskCalendarHeader} from "./TaskCalendarHeader";
import {TasksForTaskCalendar} from "./TasksForTaskCalendar";

export const TaskCalendar = ({todayTasks, onDelete, onToggle, onEdit}) => {
    return (
        <div>
            <TaskCalendarHeader/>
            {todayTasks.length > 0 ? <TasksForTaskCalendar todayTasks={todayTasks} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} /> : 'There are no tasks for today'}
        </div>
    )
}