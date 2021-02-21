export default function ImageGridElement({
  onClickHandler,
  gridIndex,
  image,
  gridSize,
  flipped,
  resolved
}) {
  var cardSize = 760 / gridSize;
  console.log(flipped);

  return (
    <div className="perspective" onClick={e => onClickHandler(e)}>
      <div
        className={`preserve-3d duration-500 relative ${
          flipped || resolved ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="z-2 bg-center bg-no-repeat bg-cover backface-hidden rotate-y-180"
          style={{
            backgroundImage: `url(${image.download_url})`,
            width: cardSize,
            height: cardSize
          }}
          alt={image.author}
          data-grid-index={gridIndex}
          id={image.id}
        />

        <div
          className="bg-purple-600 backface-hidden absolute top-0 left-0 transform"
          style={{ width: cardSize, height: cardSize }}
          data-grid-index={gridIndex}
          id={image.id}
        ></div>
      </div>
    </div>
  );
}
