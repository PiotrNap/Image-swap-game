// import { useState, useCallback } from "react";
import ImageGridElement from "./ImageGridElement";

export default function GameGridZone({ images }) {
  console.log(images);
  return (
    <div>
      {images.map(image => {
        return <ImageGridElement image={image} />;
      })}
    </div>
  );
}
