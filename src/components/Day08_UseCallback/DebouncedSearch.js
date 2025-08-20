import { useEffect, useState, useCallback } from "react";
import useDebounce from "./useDebounce";
export default function DebouncedSearch(){

    const [searchTerm, setSearchTerm] = useState('');
    const [result,setResult] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm,500);

    const fetchResults = useCallback(async(query) => {
        console.log("API called for:", query);
        const fruits = ['apple','banana','kiwi','orange','mango','lemon','lime'];
        const filtered = fruits.filter((item) => 
            item.toLowerCase().includes(query.toLowerCase())
        );
        
        setResult(filtered);

    },[]);

    useEffect(()=> {
        if(debouncedSearchTerm){
            fetchResults(debouncedSearchTerm);
        }else{
            setResult([]);
        }
    },[debouncedSearchTerm,fetchResults]);


    return(  <div style={styles.container}>
      <h2>🔍 Debounced Search with useCallback</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Search fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {result.map((item, index) => (
          <li key={index}>🍓 {item}</li>
        ))}
      </ul>
    </div>)
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "300px",
    fontSize: "16px",
    marginBottom: "20px",
  },
};