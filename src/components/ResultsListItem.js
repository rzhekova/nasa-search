import React from "react";
import { Link } from "react-router-dom";

const ResultsListItem = ({ title, imageUrl, id }) => {
  return imageUrl ? (
    <li>
      <Link to={`/asset/${id}`}>
        <img src={imageUrl} alt={`${title}`} />
      </Link>
    </li>
  ) : (
    <li>audio here</li>
  );
};

export default ResultsListItem;
