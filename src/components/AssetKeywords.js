import React from "react";

const AssetKeywords = ({ keywords }) => {
  return (
    <p>
      <strong>Keywords: </strong>
      {keywords.join(" | ")}
    </p>
  );
};

export default AssetKeywords;
