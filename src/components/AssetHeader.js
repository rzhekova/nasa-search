import React from "react";
import AssetTitle from "./AssetTitle";
import AssetDescription from "./AssetDescription";
import AssetKeywords from "./AssetKeywords";
import AssetCenter from "./AssetCenter";
import AssetCreatedAt from "./AssetCreatedAt";

const AssetHeader = ({ title, description, keywords, center, createdAt }) => {
  return (
    <div className="asset-header">
      <AssetTitle title={title} />
      <AssetKeywords keywords={keywords} />
      <AssetCenter center={center} />
      <AssetCreatedAt createdAt={createdAt} />
      <hr className="asset-separator" />
      <AssetDescription description={description} />
    </div>
  );
};

export default AssetHeader;
