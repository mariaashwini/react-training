import { useState, useTransition } from "react";

const SearchWithTransition = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      setResults(bigList.filter((item) => item.includes(value)));
    });
  };

  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isPending && <p>Loading. . .</p>}
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWithTransition;
