import { useState, useContext, createContext } from "react";
import axios from "axios";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
  /*const [waiting, setWaiting] = useState(true); //waiting
  const [loading, setLoading] = useState(false); //loading
  const [questions, setQuestions] = useState([]); //questions
  const [index, setIndex] = useState(0); //index
  const [correct, setCorrect] = useState(0); //correct
  const [error, setError] = useState(false); //error
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [modal, setModal] = useState(false);
  //fetchQuestions

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));

    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setLoading(true);
      }
    } else {
      setWaiting(true);
    }
  };
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setWaiting(true);
    setCorrect(0);
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswers = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, difficulty, category } = quiz;
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        modal,
        nextQuestion,
        checkAnswers,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );*/
  const [questions,setquestions]=useState([]);
  const [index,setindex]=useState(0);
  const [correct,setcorrect]=useState(0);
  const [waiting,setWaiting]=useState(true);
  const [loading,setLoading]=useState(false);
  const [quiz,setquiz]=useState({
    amount: 10,
    difficulty : "easy",
    category: "sports"
  })
  const [modal,setmodal]=useState(false);
  const nextQuestion=()=>{
    if(index===questions.length-1)
       {
      openModal();
      return ;
       }   
    setindex((index)=> (index+1))
     
  }
  const checkAnswers=(value)=>{
    if(value)
      setcorrect(correct+1);
    nextQuestion();
}
  const openModal=()=>{
    setmodal(true);
  }
  const closeModal=()=>{
    setmodal(false);
    setWaiting(true);
    setindex(0);
    setcorrect(0);
    console.log(waiting);
  }
 const fetchQuestions =async (url)=>{
    setLoading(true);
    setWaiting(false);
    const response=await axios(url).catch((error)=>console.log(error));
    console.log(response);
    if(response)
      {
      const data=response.data.results;
      if(data.length>0)
        {
        setquestions(data);
        setLoading(false);
        console.log(1);
        }
      //console.log(questions.length);
      }
 }
 const handlechange=(e)=>{
  
    const name=e.target.name;
    const value=e.target.value;
    setquiz({...quiz,[name]:value})
 }
 const handlesubmit=(e)=>{
  e.preventDefault();
  const {amount,difficulty,category}=quiz;
  console.log(amount);
  console.log(difficulty);
  fetchQuestions(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`);
 }
 
 return (
  <AppContext.Provider value={{questions,index,correct,waiting,loading,setmodal,handlechange,handlesubmit,quiz,modal,closeModal,nextQuestion,checkAnswers,fetchQuestions}}>
    {children}</AppContext.Provider>
 )
};
  
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
