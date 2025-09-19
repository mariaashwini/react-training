import { useReducer, useState } from "react";

function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state,{id: Date.now(), text: action.text, done: false}];
        case "toggle":
            return state.map(todo => 
                todo.id === action.id ? {...todo,done: !todo.done} : todo
            );
        case "delete":
            return state.filter(todo => todo.id !== action.id);         
        default:
            return state;
    }
}
export default function TodoApp() {
  const [text, setText] = useState("");
  const [todos,dispatch] = useReducer(reducer,[]);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({type:"add",text});
    setText("");
  }
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
            <li key={todo.id} style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}
            <button onClick={()=>dispatch({type: "toggle", id: todo.id})}>Toggle</button>
            <button onClick={()=>dispatch({type: "delete", id: todo.id})}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
