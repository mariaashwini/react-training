import { useState } from "react";
export default function NameForm()
{

    const [user,setUser] = useState('');
    return (
        <>
        <h2>Controlled Form Input</h2>
        <input type="text" id="name" value={user} onChange={(e) => setUser(e.target.value)}/>
        <h1>Hello, {user || 'stranger'}</h1>
        </>
    );
}