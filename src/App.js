import { useState } from "react";
import ImagesApi from "./utils/imagesApi";
import LoadingSpinner from "./ui_tools/LoadingSpinner";
import GameGridZone from "./game_dashboard/GameGridZone";
import IntroWindow from "./IntroWindow";
import "./App.css";

function App() {
  const [images, setImages] = useState(null);
  const [newGame, setNewGame] = useState(true);
  const [loading, setLoading] = useState(false);

  const onFormSubmition = async e => {
    e.preventDefault();
    var selectedGrid = document.querySelector(
      'input[name="grid-size"]:checked'
    );
    if (selectedGrid === null) {
      return alert("Please select one option to continue.");
    }
    setLoading(true);
    var data = await ImagesApi(selectedGrid.value);
    // double the images array and shuffle
    data = [...data, ...data].sort((a, b) => 0.5 - Math.random());
    setImages(data);
    setNewGame(false);
    setLoading(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {newGame ? (
          <IntroWindow onFormSubmition={onFormSubmition} />
        ) : (
          <GameGridZone images={images} />
        )}
      </header>
    </div>
  );
}

export default App;
