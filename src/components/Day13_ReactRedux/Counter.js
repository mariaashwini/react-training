import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import { setName,setAge, resetProfile } from "./profileSlice";
import { useState } from "react";

export default function Counter(){
    const count = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.profile.name);
    const age = useSelector((state) => state.profile.age);
    const [newName,setNewName] = useState('');

    const dispatch = useDispatch();


    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Counter: {count}</h1>
            <button onClick={()=>dispatch(increment())}>➕ Increment</button>
            <button onClick={()=>dispatch(decrement())}>➖ Decrement</button>
            <button onClick={()=>dispatch(reset())}>🔄 Reset</button>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>

            <input type="text" placeholder="Enter name" value={newName} onChange={(e)=>setNewName(e.target.value)} />
            <button onClick={()=>dispatch(setName(newName))}>Update Name</button>
        </div>
    )
}