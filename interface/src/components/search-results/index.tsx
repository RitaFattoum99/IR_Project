import React from "react";
import ResultItem from "./result-item";
import BeatLoader from "react-spinners/BeatLoader";

export type ResultType = {
  text: string;
};

type SearchResultsPropsType = {
  results: ResultType[] | null;
  isLoading: boolean;
};

const SearchResults = ({ results, isLoading }: SearchResultsPropsType) => {
  if (isLoading) {
    return <BeatLoader color="#007BFF" />;
  }

  return (
    <div className="results-container">
      {results &&
        results.map((result, index) => (
          <ResultItem key={index} text={result.text} />
        ))}
    </div>
  );
};

export default SearchResults;
