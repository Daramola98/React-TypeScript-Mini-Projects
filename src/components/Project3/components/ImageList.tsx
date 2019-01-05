import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

export interface IImagesProp {
  id: string;
  description: string;
  urls: { regular: string };
}

interface IImageListProps {
  images: IImagesProp[];
}

const ImageList = ({ images }: IImageListProps) => {
  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
