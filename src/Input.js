import './App.css';
import { useState } from 'react';
import Dates from './Date';

let nextId = 0; 

export default function Input(){
    const [title, setTitle] = useState("");
    const [values, setValues] = useState([
        {id:'1', title:"First todo", status: "pending"},
    ]);

    const handleCheckbox = (e) => {
        const updatedValue = values.map((value) => {
            if (value.id === e.target.id){
                return {...value, status: e.target.checked? "completed" : "pending"};
            }
            return value;
        });
        setValues (updatedValue);
  };
  const handleTextOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClick = (e) => {
    console.log(values.length + 1, "new length");
    setValues([
      ...values,
      { id: String(values.length + 1), title: title, status: "pending" }
    ]);
    setTitle("");
  };

    return(
        <>
        <div className="tasks">
        <div className='box'>
            <Dates />
            <form>
            <label for="task"> Add task </label>
            <input
                value={title}
                onChange={e=> setTitle(e.target.value)} name="task" type="text"/> <br/>
                <div>
                {values.map(value => (
                    <div className='check'>
                    <span style={{
                        // textDecoration: value.status === "completed" ? "line-through" : "",
                      color: value.status === "completed" && "gray",
                    }}>{value.title}</span>
                    <input type='checkbox' className='chkbox' checked={value.status === "completed"} onChange={handleCheckbox} id={value.id}/>
                    </div>
                ))}
                </div>
            </form>
            <title 
            type="text"
            value={title}
            id={"input"}
            onChange={handleTextOnChange}/>

        <button onClick={handleOnClick} className='button'>&nbsp;+&nbsp;</button>
        </div>
        </div>
        </>
    )
}