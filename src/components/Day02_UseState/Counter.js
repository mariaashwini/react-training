import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  const incrementFunc = () => setCount(count + 1);
  const decrementFunc = () => setCount(count - 1);
  const handleLikes = () => setLike(like + 1);

  return (
    <div className="counter-container">
      <h2>🧮 Counter & Like Demo</h2>

      <div className="counter-box">
        <p className="label">Count:</p>
        <h3 className="number">{count}</h3>
        <button onClick={incrementFunc}>➕ Increment</button>
        <button onClick={decrementFunc} disabled={count === 0}>➖ Decrement</button>
      </div>

      <div className="like-box">
        <p className="label">Likes:</p>
        <h3 className="number">{like} ❤️</h3>
        <button onClick={handleLikes}>👍 Like</button>
      </div>
    </div>
  );
}