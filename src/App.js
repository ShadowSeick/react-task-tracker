import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import About from './components/About';
import Button from './components/Button';
import { TaskCalendar } from './components/TaskCalendar';
import { motion } from 'framer-motion';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
      updateTodayTasks(tasksFromServer)
    }

    getTasks();
  }, []);


  const updateTodayTasks = (tasks) => {
    const today = new Date().getDate();
    setTodayTasks(tasks.filter((task) => today === new Date(task.objectDate).getDate()))
  }

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  // Call Add Task
  const callAddTask = () => {
    if (showEditTask) setShowEditTask(!showEditTask);
    setShowAddTask(!showAddTask);
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    
    const data = await res.json();

    setTasks([...tasks, data]);
    updateTodayTasks([...todayTasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task};
    // setTasks([...tasks, newTask]);
  }

  // Call Edit Task
  const callEditToSelectedTask = async (id) => {
    const task = await fetchTask(id);
    setTaskToEdit(task);
    
    if (showAddTask) setShowAddTask(!showAddTask);
    setShowEditTask(!showEditTask);
  }

  // Edit Task
  const editTask = async (task) => {
    const id = taskToEdit.id;
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    });
    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? data : task));
    setShowEditTask(false);  
    updateTodayTasks(todayTasks.map((todayTask) => todayTask.id === id ? data : task));
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    { method: 'DELETE' })

    setTasks(tasks.filter((task) => task.id !== id ));
    updateTodayTasks(todayTasks.filter((todayTask) => todayTask.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(updTask)
    });

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
    updateTodayTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }

  const variantsForMainTask = {
    hidden: {opacity: 0.2, y: -200, scaleY: 0.5},
    visible: {opacity: 1, translateY:200, scaleY: 1}
  }

  const variantsForCalendar = {
    hidden: {opacity:0, x: -200, scaleX: 0.5},
    visible: {opacity: 1, translateX:200, scaleX: 1}
  }

  return (
    <Router>
      <div className='container'>
        <motion.div className='col'
        initial='hidden'
        animate='visible'
        variants={variantsForMainTask}
        >
        <Header onAdd={callAddTask} showAdd={showAddTask}/>
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && !showEditTask && <AddTask onAdd={addTask}/>}
            {showEditTask && !showAddTask && <EditTask onEdit={editTask}  taskToEdit={taskToEdit} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={callEditToSelectedTask} showEditTask={showEditTask} /> : ('No tasks To Show')}
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer/>
        </motion.div>
        <motion.div className='col'
        initial='hidden'
        animate='visible'
        variants={variantsForCalendar}
        transition={{delay: 1}}
        >
          <TaskCalendar todayTasks={todayTasks} onDelete={deleteTask} onEdit={callEditToSelectedTask} onToggle={toggleReminder} showEditTask={showEditTask} />
        </motion.div>
        <div className='col-12'>
          <Button/>
        </div>
    </div>
    </Router>
  );
}

Header.defaultProps = {
  title : 'Task Tracker'
}

export default App;
