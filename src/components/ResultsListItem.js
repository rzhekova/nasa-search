import React from "react";
import { Link } from "react-router-dom";

const ResultsListItem = ({ title, imageUrl, id, mediaType }) => {
  return (
    <li>
      <Link to={`/asset/${id}`}>
        <div className="item-wrapper">
          <h3>{title}</h3>
          {mediaType === "audio" || mediaType === "video" ? (
            <div className="list-item-media-wrapper">
              <i class="fas fa-play fa-5x" />
              <i
                class={
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
