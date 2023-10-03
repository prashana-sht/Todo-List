import './App.css';
import { useState } from 'react';

let nextId = 0; 

export default function Input(){
    const [title, setTitle] = useState("");
    const [values, setValues] = useState([
        {id:1, title:"First todo", status: "pending"},
        {id:1, title:"Second todo", status: "completed"}

    ]);

//     const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = (e) => {
    setValues(values.status=== "completed");
  }
    return(
        <>
        <div className="tasks">
        <div className='box'>
            <h1> Todo list </h1>
            <form>
            <label for="task"> Add task </label>
            <input
                value={title}
                onChange={e=> setTitle(e.target.value)} name="task" type="text"/> <br/>
                <ul>
                {values.map(value => (
                    <div className='check'>
                    <span>{value.title}</span>
                    <input type='checkbox' className='chkbox' checked={value.status === "completed"} onChange={handleCheckbox} key={value.id}/>
                    </div>
                ))}
                </ul>
            </form>
        <button onClick={() => {
            setValues ([
                ...values,
                {id: nextId++, title: title }
            ])
        }} className='button'>&nbsp;+&nbsp;</button>
        </div>
        </div>
        </>
    )
}