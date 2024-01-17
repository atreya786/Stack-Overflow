import React, { useEffect, useState } from "react";
import Leftbar from "../components/Leftbar";
import Mainbar from "../components/Mainbar";
import Tags from "../components/Tags";
import axios from "axios";

function Home({ searchResults }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://api.stackexchange.com/2.3/questions",
          {
            params: {
              order: "desc",
              sort: "activity",
              site: "stackoverflow",
              filter: "withbody",
            },
          }
        );
        setQuestions(response.data.items);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [searchResults]);

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden gap-3  h-[88vh]">
      <div className="hidden 2xl:block w-[15%]">
        <Leftbar />
      </div>

      <div className="w-full 2xl:w-[60%] px-2 h-full overflow-x-hidden py-4">
        <Mainbar
          questions={searchResults.length > 0 ? searchResults : questions}
        />
      </div>

      <div className="hidden 2xl:block w-[25%] h-full">
        <Tags
          questions={searchResults.length > 0 ? searchResults : questions}
        />
      </div>
    </div>
  );
}

export default Home;
