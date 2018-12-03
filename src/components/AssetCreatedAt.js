import React from "react";

const AssetCreatedAt = ({ createdAt }) => {
  const date = new Date(createdAt);
  const dateArray = date.toString().split(" ");

  return (
    <p>
      <strong>Created: </strong>{" "}
      {`${dateArray[2]} ${dateArray[1]} ${dateArray[3]}`}
    </p>
  );
};

export default AssetCreatedAt;
