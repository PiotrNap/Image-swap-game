import { useState } from "react";
import ImagesApi from "./utils/imagesApi";
import IntroWindow from "./IntroWindow";
import "./App.css";

function App() {
  const [images, setImages] = useState(null);

  const onFormSubmition = async e => {
    e.preventDefault();
    var selectedGrid = document.querySelector('input[name="grid-size"]:checked')
      .value;
    var data = await ImagesApi(selectedGrid);
    // double the images and shuffle
    data = [...data, ...data].sort((a, b) => 0.5 - Math.random());
    console.log(data);
    setImages(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <IntroWindow onFormSubmition={onFormSubmition} />
      </header>
    </div>
  );
}

export default App;
