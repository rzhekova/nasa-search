import React from "react";
import { Link } from "react-router-dom";

const ResultsListItem = ({ title, imageUrl, id }) => {
  return (
    <li>
      <Link to={`/asset/${id}`}>
        <img className="list-item-image" src={imageUrl} alt={`${title}`} />
      </Link>
    </li>
  );
};

export default ResultsListItem;
