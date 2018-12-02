import React from "react";

const Asset = ({ mediaType, assetLink, title }) => {
  if (mediaType === "image") {
    return <img className="asset-image" src={assetLink} alt={title} />;
  } else {
    return (
      <div className="asset-audio-wrapper">
        <audio src={assetLink} controls />
      </div>
    );
  }
};

export default Asset;
