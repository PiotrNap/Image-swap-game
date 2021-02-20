// import { useState, useCallback } from "react";
import ImageGridElement from "./ImageGridElement";

export default function GameGridZone({ images, gridSize }) {
  return (
    <div className={`grid grid-cols-${gridSize} gap-3`}>
      {images.map((image, i) => {
        return (
          <ImageGridElement
            gridSize={gridSize}
            key={i.toString()}
            image={image}
          />
        );
      })}
    </div>
  );
}
