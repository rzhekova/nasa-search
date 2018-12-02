import React from "react";
import { Link } from "react-router-dom";

const ResultsListItem = ({ title, imageUrl, id }) => {
  return (
    <li>
      <Link to={`/asset/${id}`}>
        {imageUrl ===
        "https://images.nasa.gov/images/play_btn-sm-2.d350935c.png" ? (
          <div className="item-wrapper">
            <h3>{title}</h3>
            <div className="list-item-audio-wrapper">
              <img
                className="list-item-audio-play-button"
                src={imageUrl}
                alt={`${title}`}
              />
            </div>
          </div>
        ) : (
          <div className="item-wrapper">
            <h3>{title}</h3>
            <img className="list-item-image" src={imageUrl} alt={`${title}`} />
          </div>
        )}
      </Link>
    </li>
  );
};

export default ResultsListItem;
