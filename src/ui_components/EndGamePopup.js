export default function EndGamePopup() {
  return (
    <div className="z-10 grid place-items-center fixed bg-opacity-75 bg-gray-500 w-screen h-screen">
      <div className="w-1/3 h-1/4 bg-gray-200 rounded-md border-4 grid place-items-center">
        <h2 className="text-3xl text-gray-700 font-semibold">
          Sorry... Game over.
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 text-white font-semibold text-xl bg-purple-500 rounded-md borded-3 border-purple-800 hover:bg-purple-600"
        >
          Let me try again!
        </button>
      </div>
    </div>
  );
}
