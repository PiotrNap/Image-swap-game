export default function ImageGridElement({ image, key }) {
  return (
    <div>
      <img src={image.download_url} width="144" height="144" alt="" id={key} />
    </div>
  );
}
