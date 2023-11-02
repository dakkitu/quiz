import { useGlobalContext } from "../Context/Context";
const SetupForm = () => {
  /*const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              onChange={handleChange}
              value={quiz.difficulty}
            >
              <option value="ease">easy</option>
              <option value="medium">medium</option>
              <option value="hard">difficult</option>
            </select>
          </div>
          {error && (
            <p className="error">can't generates questions , pls try again</p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );*/
  const {quiz,handlechange,handlesubmit}=useGlobalContext();
  return (
    <div className="quiz quiz-small">
      <form className="setup-form">
        <div className="form-control">
      <label htmlFor="amount">
        amount
      </label>
      <input type="text" id ="amount" name="amount" value={quiz.amount} onChange={handlechange} min={1} max={50} />
      </div>
      <div className="form-control">
      <label htmlFor="difficulty">
        difficulty
      </label>
      <select name="difficulty" id= "difficulty" onChange={handlechange} value={quiz.difficulty}>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
      </select>
      </div>
      <div className="form-control"> 
      <label htmlFor="category">
        category
      </label>
      <select name="category" id= "category" onChange={handlechange} value={quiz.category}>
      <option value="sports">sports</option>
      <option value="politics">politics</option>
      <option value="history">history</option>
      </select>
      </div>
      <button className="submit-btn" onClick={handlesubmit}>submit</button>
    </form>
    </div>
    
  )
};
export default SetupForm;
