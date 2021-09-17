import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

const EditTask = ( { onEdit, taskToEdit } ) => {
    const [text, setText] = useState(taskToEdit.text);    
    const [date, setDate] = useState(new Date(taskToEdit.objectDate));    
    const [reminder, setReminder] = useState(taskToEdit.reminder);    

    const onSubmit = (e) => {
        e.preventDefault();
        let completeDate = `${date.toLocaleDateString('es-ES')} ${date.toLocaleTimeString('en-US')}`;
        onEdit({ text, date: completeDate, objectDate: date, reminder });
        
    }

    const variants = {
        hidden: {opacity: 0.2, y: 75},
        visible: {opacity: 1, translateY:-75, scaleY: 1}
    }

    return (
        <motion.div
        initial= 'hidden'
        animate= 'visible'
        variants={variants}
        transition={{duration: 0.20}}
        >
        <h2>Edit Task</h2>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <ReactDatePicker 
                dateFormat= "MMM d, yyyy h:mmaa"
                showTimeSelect
                selected={date}
                onChange={(date) => setDate(date)}
                />
                
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='saveTask' className='btn btn-block' />
        </form>
        </motion.div>
    )
}

export default EditTask