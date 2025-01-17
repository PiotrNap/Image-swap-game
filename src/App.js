import { useState } from "react";
import ImagesApi from "./utils/imagesApi";
import LoadingSpinner from "./ui_components/LoadingSpinner";
import GameTimer from "./ui_components/GameTimer";
import GameGridZone from "./game_dashboard/GameGridZone";
import EndGamePopup from "./ui_components/EndGamePopup";
import IntroWindow from "./IntroWindow";
import "./App.css";

function App() {
  const [startTime, setStartTime] = useState(0);
  const [images, setImages] = useState(null);
  const [newGame, setNewGame] = useState(true);
  const [loading, setLoading] = useState(false);
  const [gridSize, setGridSize] = useState(null);
  const [endGame, setEndGame] = useState(false);

  const onFormSubmition = async e => {
    e.preventDefault();
    var selectedGrid = document.querySelector(
      'input[name="grid-size"]:checked'
    );
    if (selectedGrid === null) {
      return alert("Please select one option to continue.");
    }
    setLoading(true);

    var numOfImages = (selectedGrid.value * selectedGrid.value) / 2;
    var data = await ImagesApi(numOfImages);

    // double the images array and shuffle
    data = [...data, ...data].sort((a, b) => 0.5 - Math.random());
    setImages(data);
    setNewGame(false);
    setStartTime(selectedGrid.value / 2);
    setGridSize(selectedGrid.value);
    setLoading(false);
  };

  const gameEnded = () => {
    setEndGame(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App relative">
      <header className="App-header">
        {newGame ? (
          <IntroWindow onFormSubmition={onFormSubmition} />
        ) : (
          <>
            {endGame ? <EndGamePopup /> : ""}
            <GameTimer startTime={startTime} gameEnded={gameEnded} />
            <GameGridZone images={images} gridSize={gridSize} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
