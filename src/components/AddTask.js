import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import Alert from "./Alert";

const AddTask = ( { onAdd } ) => {
    const [text, setText] = useState('');    
    const [date, setDate] = useState(new Date());    
    const [reminder, setReminder] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const maxTextLength = 40;   

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            setShowAlert(true);
            setAlertText('Please add a task');
            return
        }

        if (text.length > maxTextLength) {
            setShowAlert(true);
            setAlertText("The name task is too long. Only 40 characters long");
            return;
        }
        let completeDate = `${date.toLocaleDateString('es-ES')} ${date.toLocaleTimeString('en-US')}`;
        onAdd({ text, date: completeDate, objectDate: date, reminder });

        setText('');
        setDate(new Date());
        setReminder(false);
        setShowAlert(false);
    }

    const variants = {
        hidden: {opacity: 0.2, y: -25},
        visible: {opacity: 1, translateY:25}
    }

    return (
        <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{duration: 0.2}}
        >
        <h2>Add Task</h2>
        {showAlert && <Alert alertText={alertText}/>}
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

export default AddTask
