const LOREM_PICSUM_API = "https://picsum.photos/v2/list?";

export default async function ImagesApi(gridSize) {
  return new Promise(async (res, rej) => {
    try {
      var page = Math.floor(Math.random() * 10);
      var response = await fetch(
        LOREM_PICSUM_API + `page=${page}&limit=${gridSize}`
      );
      var data = response.json();
      res(data);
    } catch (err) {
      rej(new Error(err.message));
    }
  });
}
