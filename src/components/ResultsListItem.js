import React from "react";
import { Link } from "react-router-dom";

const ResultsListItem = ({ assetDetails, imageUrl, mediaType }) => {
  const { title, nasa_id } = assetDetails.data[0];

  return (
    <li>
      <Link
        to={{
          pathname: `/asset/${nasa_id}`,
          state: { mediaType, assetDetails }
        }}
      >
        <div className="item-wrapper">
          <h3>{title}</h3>
          {mediaType === "audio" || mediaType === "video" ? (
            <div className="list-item-media-wrapper">
              <i className="fas fa-play fa-5x" />
              <i
                className={
                  mediaType === "audio"
                    ? "fas fa-headphones fa-2x"
                    : "fas fa-video fa-2x"
                }
              />
            </div>
          ) : (
            <img className="list-item-image" src={imageUrl} alt={`${title}`} />
          )}
        </div>
      </Link>
    </li>
  );
};

export default ResultsListItem;
