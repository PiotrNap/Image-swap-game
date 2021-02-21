export default function IntroWindow({ onFormSubmition }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold pb-2">Welcome in our game!</h2>
      <p className="text-2xl">Please choose the grid size: </p>
      <form id="grid" onSubmit={e => onFormSubmition(e)}>
        <input type="radio" name="grid-size" id="4" value="4" />
        <label htmlFor="4" className="text-2xl pl-2">
          4/4
        </label>
        <br />
        <input type="radio" name="grid-size" id="8" value="8" />
        <label htmlFor="8" className="text-2xl pl-2">
          8/8
        </label>
        <br />
        <input type="radio" name="grid-size" id="10" value="10" />
        <label htmlFor="10" className="text-2xl pl-2">
          10/10
        </label>
        <br />
        <button
          type="submit"
          className="text-2xl font-medium px-8 py-2 mt-4 bg-purple-600 border-4 rounded-xl hover:bg-purple-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
