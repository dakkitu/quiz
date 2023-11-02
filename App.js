import SetupForm from "./Form/SetupForm";
import Loading from "./Loading/LoadingScreen";
import Modal from "./Modal/Modal.jsx";
import { useGlobalContext } from "./Context/Context.jsx";
function App() {
  /*const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestions,
    checkAnswers,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  let answers = [...incorrect_answers];
  
  answers.push(correct_answer);
  console.log(answers);
  return (
    <main>
      <Modal />
      <section className="quiz">
        
        <p className="correct-answers">
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswers(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestions}>
          next questions
        </button>
      </section>
    </main>
  );*/
  const {nextQuestion,checkAnswers,index,correct,loading,waiting,questions}=useGlobalContext();
  //console.log(waiting);
  if(waiting)
      //console.log(0);
    return (<SetupForm/>);
  if(loading)
    return (<Loading/>);  
  console.log(questions[index]);
  const {incorrect_answers ,correct_answer, question}=questions[index];
  //console.log(correct_answer);
  //return (<div>0</div>)
  //const {incorrect_answers,correct_answer,question}=questions[index];
  let answers=[...incorrect_answers];
  answers.push(correct_answer);
  console.log(answers);
  return (
    <main>
      <Modal/>
      <section className="Quiz">
        <p className="correct-answers">
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
              {answers.map((answer,index)=>{
                return(
                <button key={index} onClick={()=>checkAnswers(correct_answer===answer)} className ="answer-btn">{answer}</button>
                  )
              })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>nextQuestion</button>
      </section>
    </main>
  )
}
export default App;
