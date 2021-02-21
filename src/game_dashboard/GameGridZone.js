import { useState } from "react";
import ImageGridElement from "./ImageGridElement";

export default function GameGridZone({ images, gridSize }) {
  const [flipped, setFlipped] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(null);
  const [resolved, setResolved] = useState([]);

  const onClickHandler = e => {
    if (flipped.length === 0) {
      if (resolved.includes(e.target.id)) return;
      setFlipped([e.target.dataset.gridIndex]);
      setCurrentImageId(e.target.id);
    } else if (
      flipped.length > 0 &&
      !flipped.includes(e.target.dataset.gridIndex)
    ) {
      if (e.target.id === currentImageId) {
        setResolved([...resolved, e.target.id]);
      }
      setFlipped([...flipped, e.target.dataset.gridIndex]);
      setCurrentImageId(null);
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className={`grid grid-cols-${gridSize} gap-3`}>
      {images.map((image, i) => {
        return (
          <ImageGridElement
            resolved={resolved.includes(image.id)}
            flipped={flipped.includes(String(i))}
            gridIndex={i}
            gridSize={gridSize}
            key={i.toString()}
            image={image}
            onClickHandler={onClickHandler}
          />
        );
      })}
    </div>
  );
}
