import React from "react";

const Asset = ({ mediaType, assetLink, title }) => {
  if (mediaType === "image") {
    return <img className="asset-image" src={assetLink} alt={title} />;
  } else if (mediaType === "audio") {
    return (
      <div className="asset-audio-wrapper">
        <audio src={assetLink} controls />
      </div>
    );
  } else {
    return (
      <div>
        <video className="asset-video-wrapper" src={assetLink} controls />
      </div>
    );
  }
};

export default Asset;
