import React from "react";
import AssetTitle from "./AssetTitle";
import AssetDescription from "./AssetDescription";

const AssetHeader = ({ title, description }) => {
  return (
    <div>
      <AssetTitle title={title} />
      <AssetDescription description={description} />
    </div>
  );
};

export default AssetHeader;
