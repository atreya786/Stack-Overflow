import React from "react";

function Tags({ questions }) {
  return (
    <>
      <div className="text-gray-800 text-xl  py-2 border-b-4 border-orange-500">
        Hot Network Questions
      </div>
      <div className="h-[95%] overflow-y-auto ">
        <hr />
        {questions.map((e) => {
          return (
            <>
              <div className="  flex my-2 cursor-pointer">
                <a href={e.link}>
                  <div className="text-blue-600">
                    <u>{e.title}</u>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
