import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
  const [showFutureTasks, setShowFutureTasks] = useState(true);
  const [showPastTasks, setShowPastTasks] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);
  const [pastTasks, setPastTasks] = useState([]);
  const [futureTasks, setFutureTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      updateTodayTasks(tasksFromServer);
      updateFutureTasks(tasksFromServer);
      updatePastTasks(tasksFromServer);
    }

    getTasks();
  });


  // If true pass Future tasks, if false pass past tasks
  const getPastOrFutureTasks = (tasks, futureOrPast) => {
    let today = new Date();
    today = [today.getFullYear(), today.getMonth(), today.getDate()]

    futureOrPast = futureOrPast.toLowerCase() === 'future' ? true :
                   futureOrPast.toLowerCase() === 'past' ? false :
                   null;

    return tasks.filter((task) => {
      let taskDate = new Date(task.objectDate);
      taskDate = [taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate()]
      for (let i = 0; i < taskDate.length; i++) {
          if (taskDate[i] > today[i]) return futureOrPast;
      }
      return !futureOrPast;
    })
  } 


  const updateTodayTasks = (tasks) => {
    const today = new Date().toDateString();
    setTodayTasks(tasks.filter((task) => today === new Date(task.objectDate).toDateString()))
  }

  const updateFutureTasks = (tasks) => {
    setFutureTasks(getPastOrFutureTasks(tasks, 'future'));
  }

  const updatePastTasks = (tasks) => {
    setPastTasks(getPastOrFutureTasks(tasks, 'past'));
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
    updateFutureTasks([...futureTasks, data]);
    updatePastTasks([...pastTasks, data]);
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

    const updatedTasks = todayTasks.map((todayTask) => todayTask.id === id ? data : task);

    setTasks(updatedTasks);
    updateTodayTasks(updatedTasks);
    updateFutureTasks(updatedTasks);
    updatePastTasks(updatedTasks)
    setShowEditTask(false);  
    
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    { method: 'DELETE' })

    const updatedTasks = tasks.filter((task) => task.id !== id )

    setTasks(updatedTasks);
    updateTodayTasks(updatedTasks);
    updateFutureTasks(updatedTasks);
    updatePastTasks(updatedTasks);
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

    const updatedTasks = tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task);

    setTasks(updatedTasks);
    updateTodayTasks(updatedTasks);
    updateFutureTasks(updatedTasks);
    updatePastTasks(updatedTasks);
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
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <motion.div className='col border-rounded'
          initial='hidden'
          animate='visible'
          variants={variantsForMainTask}
          transition={{delay: 0.1}}
          >
          <Header onAdd={callAddTask} showAdd={showAddTask}/>
          <Route exact path='/' render={(props) => (
            <>
              {showAddTask && !showEditTask && <AddTask onAdd={addTask}/>}
              {showEditTask && !showAddTask && <EditTask onEdit={editTask}/>}
              <motion.div className='col border-rounded'
                          initial='hidden'
                          animate='visible'
                          variants={variantsForCalendar}
                          transition={{delay: 0.2}}
                          >
                          <TaskCalendar todayTasks={todayTasks} onDelete={deleteTask} onEdit={callEditToSelectedTask} onToggle={toggleReminder} showEditTask={showEditTask} />
              </motion.div>
              <motion.div className='col-12'
                          initial='hidden'
                          animate='visible'
                          variants={variantsForMainTask}
                          transition={{delay: 0.3}}>
                <div className='row border-rounded p-5'>
                <div className='col-12'>
                  
                  <div className={`row ${showFutureTasks && showPastTasks ? 'space-between' : ''}`}>
                    <Button text={'future tasks'} color={'green'} onClick={() => setShowFutureTasks(!showFutureTasks)} showFutureTasks={showFutureTasks} />
                    <Button text={'pasts tasks'} color={'green'} onClick={() => setShowPastTasks(!showPastTasks)} showPastTasks={showPastTasks} />
                  </div> 
                </div>
                  {showFutureTasks && showPastTasks && tasks.length > 0 ?
                    <>
                        <Tasks tasks={futureTasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={callEditToSelectedTask} showEditTask={showEditTask} />
                        <Tasks tasks={pastTasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={callEditToSelectedTask} showEditTask={showEditTask} />
                    </>
                    : showFutureTasks && tasks.length > 0 ? 
                    <Tasks tasks={futureTasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={callEditToSelectedTask} showEditTask={showEditTask} /> : 
                    showPastTasks && tasks.length > 0 ? 
                    <Tasks tasks={pastTasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={callEditToSelectedTask} showEditTask={showEditTask} /> : ("")}
                </div>
              </motion.div>
            </>
          )} />
          <Route path='/about' component={About}/>
          <Footer/>
          </motion.div>
        </div>
    </div>
    </BrowserRouter>
  );
}

Header.defaultProps = {
  title : 'Task Tracker'
}

export default App;
