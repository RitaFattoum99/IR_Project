import React, { useState } from "react";
import SearchResults, { ResultType } from "./components/search-results";
import SearchBar from "./components/search-bar";

const App = () => {
  const [results, setResults] = useState<ResultType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string, language: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, language }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const fetchedResults = await response.json();
      setResults(fetchedResults.docs);
    } catch (error) {
      console.error("Fetch error:", error);
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>HMEEDO</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} isLoading={isLoading} />
    </div>
  );
};

export default App;
