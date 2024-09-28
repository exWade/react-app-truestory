import React from "react";
import "../components/Card/Card.scss";

const SkeletonCard = () => {
  return (
    <div className="photo-card-content">
      <div className="card-img-container skeleton">
        <div className="card-image skeleton"></div>
      </div>
      <div className="image-caption w-2/3 skeleton"></div>
      <div className="addition w-1/3 h-6 skeleton">
        <div className="addition-wrapper skeleton"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
