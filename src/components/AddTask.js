import { useState } from 'react'; 

const AddTask = () => {

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  
  return (
    <form className="add-form" action="">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add task"/>
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder="Add day and time"/>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder</label>
        <input type="checkbox"/>
      </div>
      <input className="btn btn-block" type="submit" value='Save Task'/>
    </form>
  )
}

export default AddTask
