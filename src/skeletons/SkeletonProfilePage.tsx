import SkeletonGallery from "./SkeletonGallery";
import SkeletonProfile from "./SkeletonProfile";


const SkeletonProfilePage = () => {
  return (
    <div className="container mx-auto">
      <SkeletonProfile/>
      <SkeletonGallery/>
      
    </div>
  );
};

export default SkeletonProfilePage;
