import useLocalStorage from "./useLocalStorage";

export default function LocalStorage(){

   const [name,setName] = useLocalStorage("username",'');

   return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>👤 Welcome, {name || "Guest"}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ padding: "8px", fontSize: "16px", width: "250px" }}
      />
      <p>(Your name is saved even after refresh!)</p>
    </div>
  );
}