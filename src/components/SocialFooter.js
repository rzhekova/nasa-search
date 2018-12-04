import React from "react";

const SocialFooter = ({ title, assetLink }) => {
  return (
    <footer>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${assetLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-button">
          <i className="fab fa-facebook-f" />
        </div>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${title} -- ${assetLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-button">
          <i className="fab fa-twitter" />
        </div>
      </a>
    </footer>
  );
};

export default SocialFooter;
