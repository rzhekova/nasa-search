import React from "react";

const Asset = ({ mediaType, assetLink, title }) => {
  if (mediaType === "image") {
    return <img className="asset-image" src={assetLink} alt={title} />;
  } else {
    return <audio src={assetLink} controls />;
  }
};

export default Asset;
