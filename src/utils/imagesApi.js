const LOREM_PICSUM_API = "https://picsum.photos/v2/list?";

export default async function ImagesApi(gridSize) {
  return new Promise(async (res, rej) => {
    try {
      var response = await fetch(LOREM_PICSUM_API + `page=1&limit=${gridSize}`);
      var data = response.json();
      res(data);
    } catch (err) {
      rej(new Error(err.message));
    }
  });
}
