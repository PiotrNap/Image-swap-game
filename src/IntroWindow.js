export default function IntroWindow({ onFormSubmition }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Welcome in our game!</h2>
      <p className="text-xl">Please choose the grid size: </p>
      <form id="grid" onSubmit={e => onFormSubmition(e)}>
        <input type="radio" name="grid-size" id="4" value="4" />
        <label htmlFor="4">4/4</label>
        <br />
        <input type="radio" name="grid-size" id="8" value="8" />
        <label htmlFor="8">8/8</label>
        <br />
        <input type="radio" name="grid-size" id="10" value="10" />
        <label htmlFor="10">10/10</label>
        <br />
        <input
          type="submit"
          value="Continue"
          className="text-2xl font-medium"
        />
      </form>
    </div>
  );
}
