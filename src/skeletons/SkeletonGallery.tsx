import React from "react";
import SkeletonCard from "./SkeletonCard";
import "../components/Gallery/Gallery.scss";

const SkeletonGallery = () => {
  return (
    <div
      className="workspace transition-all justify-items-center  grid 2xl:grid-cols-4 2xl:gap-14 xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-12 md:grid-cols-2 md:gap-36 sm:grid-cols-1 sm:gap-4"
      id="wrkspc"
    >
      {[...Array(12)].map((_, index) => (
        <div className="photo-card" key={index}>
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
};

export default SkeletonGallery;
