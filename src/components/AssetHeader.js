import React from "react";
import AssetTitle from "./AssetTitle";
import AssetDescription from "./AssetDescription";

const AssetHeader = ({ title, description }) => {
  return (
    <div className="asset-header">
      <AssetTitle title={title} />
      <AssetDescription description={description} />
    </div>
  );
};

export default AssetHeader;
