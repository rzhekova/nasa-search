import React from "react";

const AssetDescription = ({ description }) => {
  return (
    <p>
      <strong>Description:</strong> <i>{description}</i>
    </p>
  );
};

export default AssetDescription;
