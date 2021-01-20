import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react';
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const task = { id: 1, text: "Finally learn React", day: "Thursday", reminder: false };
    setTasks([...tasks, task]);
  },[]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(el=> el.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder : !task.reminder } : null));
  };
  return (
    <>
      <Header title="Task Tracker"/>
      <AddTask />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks'}
    </>
  )
}

export default App
 