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
      {keywords && <AssetKeywords keywords={keywords} />}
      {center && <AssetCenter center={center} />}
      {createdAt && <AssetCreatedAt createdAt={createdAt} />}
      <hr className="asset-separator" />
      <AssetDescription description={description} />
    </div>
  );
};

export default AssetHeader;
