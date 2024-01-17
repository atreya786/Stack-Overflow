import React, { useEffect, useState } from "react";
import Leftbar from "../components/Leftbar";
import Mainbar from "../components/Mainbar";
import Rightbar from "../components/Rightbar";
import QuestionDetail from "../components/QuestionDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [related, setRelated] = useState([]);
  const [linked, setLinked] = useState([]);
  useEffect(() => {
    const handleQuestion = async () => {
      try {
        const res = await axios.get(
          `https://api.stackexchange.com/2.3/questions/${id}`,
          {
            params: {
              order: "desc",
              sort: "activity",
              site: "stackoverflow",
              filter: "withbody",
            },
          }
        );
        setQuestions(res.data.items[0]);
      } catch (error) {
        console.error("Error fetching question details:", error);
      }
    };
    const handleAnswer = async () => {
      try {
        const respond = await axios.get(
          `https://api.stackexchange.com/2.3/questions/${id}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNdWme`
        );
        console.log(respond.data);
        setAnswers(respond.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    const handleRelated = async () => {
      const ress = await axios.get(
        `https://api.stackexchange.com/2.3/questions/${id}/related?site=stackoverflow`
      );
      setRelated(ress.data.items);
    };
    const handleLinked = async () => {
      const respond_data = await axios.get(
        `https://api.stackexchange.com/2.3/questions/${id}/linked?site=stackoverflow`
      );
      setLinked(respond_data.data.items);
    };
    handleQuestion();
    handleRelated();
    handleLinked();
    handleAnswer();
  }, [id]);
  return (
    <>
      <div className="flex h-full gap-3 px-5">
        <div className="w-[15%]  h-[88vh] ">
          <Leftbar />
        </div>
        <div className="w-[60%] px-2  h-[88vh] overflow-y-auto overflow-hidden py-4">
          <QuestionDetail questions={questions} answers={answers} />
        </div>
        <div className="w-[25%]  h-[88vh] py-2 ">
          {" "}
          <Rightbar linked={linked} related={related} />
        </div>
      </div>
    </>
  );
}

export default Detail;
