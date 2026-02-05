import './App.css';
import {useState} from "react";
import confetti from 'canvas-confetti';
export default function App(){
  const[todos,setTodos]=useState([]);
  const [Input,setInput]=useState("");
  const [message, setMessage] = useState("");

  const addTodo=()=>{
    if (Input.trim() === "") return;
setTodos([Input,...todos]);
setInput("");
  };

  return (
    <div className="container">
      <h1 className='title'>To Do List </h1>
      <div className='input-section'>
        <input
        type="text"
        value={Input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e) => {
           if (e.key === "Enter") addTodo();
      }}
        placeholder="Add a new task"
       /> <br/>
       <button onClick={addTodo}>Add</button>
        
    </div>
    <ul className='todo-list'>
      {todos.map((todo,index)=>(
        <li key={index} className='todo-item'>{todo}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button 
        className="delete-btn" 
        onClick={() => {
          const task = todos[index];
          const newTodos = todos.filter((_, i) => i !== index);
          setTodos(newTodos);
         setMessage(`You finished: "${task}" 🎉`);
         setTimeout(() => setMessage(""), 2000);
        }}
      >
        ✔️
      </button>
      
       </div>
        </li>
      ))}
    </ul>
    {message && <span className="task-message">{message}</span>}
    </div> 
  );
}