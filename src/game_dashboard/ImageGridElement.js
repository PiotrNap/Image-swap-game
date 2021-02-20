import { useState } from "react";

export default function ImageGridElement({ image, gridSize }) {
  const [flipped, setFlipped] = useState(false);

  const hoverEvent = () => {
    setFlipped(!flipped);
  };

  var cardSize = 760 / gridSize + "px";

  return (
    <div className="perspective" onClick={() => hoverEvent()}>
      <div
        className={`preserve-3d duration-500 relative ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${image.download_url})`,
            width: cardSize,
            height: cardSize
          }}
          alt={image.author}
        />

        <div
          className="z-2 bg-purple-600 backface-hidden absolute top-0 left-0 transform rotate-y-180"
          style={{ maxWidth: `${cardSize}`, maxHeight: `${cardSize}` }}
        ></div>
      </div>
    </div>
  );
}
