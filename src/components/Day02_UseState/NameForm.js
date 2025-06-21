import { useState } from "react";
export default function NameForm()
{

    const [user,setUser] = useState('');
    return (
        <>
        <input type="text" id="name" value={user} onChange={(e) => setUser(e.target.value)}/>
        <h1>Hello, {user || 'stranger'}</h1>
        </>
    );
}