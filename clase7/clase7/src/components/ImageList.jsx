import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImage = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderedImage}</div>;
}

export default ImageList;
