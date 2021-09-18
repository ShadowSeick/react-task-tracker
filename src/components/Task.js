import { FaTimes, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Task = ({ task, onDelete, onToggle, onEdit, showEditTask }) => {
    const variant= {
        hidden: {x: -50,  opacity: 0},
        visible: {x: 0, opacity: 1},
        exit: {x:50, opacity: 0}
    }

    return (
        <motion.div 
        className={`task ${task.reminder ? 'reminder' : ''} ${showEditTask ? 'highlighted' : ''}`} 
        onDoubleClick={() => onToggle(task.id)}
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variant}
        transition={{duration: '0.5'}}
        >
            <h3 >
                <div>
                {task.text}
                </div>
                <div>
                    <FaEdit style={{color: 'steelblue', cursor: 'pointer'}}
                    onClick={() => onEdit(task.id)} className= 'me-1 click-button'/>
                    <FaTimes style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)} className='click-button'/>
                </div>
            </h3>
            <p>{task.date}</p>
        </motion.div>
    )
}

export default Task
