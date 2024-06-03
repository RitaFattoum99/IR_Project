import React, { useState } from "react";

const SearchBar = ({
  onSearch,
}: {
  onSearch: (query: string, language: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("english");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query, language);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
