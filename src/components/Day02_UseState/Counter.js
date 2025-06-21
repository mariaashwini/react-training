import { useState } from "react";

export default function Counter()
{
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);


    function incrementFunc()  {
       setCount(count+1);
    }

     function decrementFunc() {
        setCount(count-1);
    }

    function handleLikes(){
        setLike(like+1);
    }
    return (
        <div>
             <h2>Event Handler</h2>
            <h3>{count}</h3>
            <button onClick={incrementFunc}>+</button>
            <button onClick={decrementFunc} disabled={count === 0}>-</button>
            <p>{like}</p>
            <button onClick={handleLikes}>Like</button>

        </div>
    );
}