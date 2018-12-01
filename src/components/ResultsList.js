import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = ({ results }) => {
  console.log(results);
  return (
    results.length > 0 && (
      <ul>
        {results.map(result => {
          const mediaType = result.data[0].media_type;
          return (
            <ResultsListItem
              key={result.data[0].nasa_id}
              title={result.data[0].title}
              mediaType={mediaType}
              id={result.data[0].nasa_id}
              imageUrl={mediaType === "image" ? result.links[0].href : null}
            />
          );
        })}
      </ul>
    )
  );
};

export default ResultsList;
