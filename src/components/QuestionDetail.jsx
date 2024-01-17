import axios from "axios";
import React, { useEffect, useState } from "react";

function QuestionDetail({ questions, answers }) {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const now = new Date();

    const yearDiff = now.getUTCFullYear() - date.getUTCFullYear();
    const monthDiff = now.getUTCMonth() - date.getUTCMonth();

    if (yearDiff > 0) {
      return `${yearDiff} ${yearDiff === 1 ? "year" : "years"} ago`;
    } else if (monthDiff > 0) {
      return `${monthDiff} ${monthDiff === 1 ? "month" : "months"} ago`;
    } else {
      return "Less than a month ago";
    }
  };
  return (
    <>
    {questions.length!==0 ?(
      <>
      <div className="shadow-lg  rounded-lg my-5">
        <div className="w-full  bg-orange-600 rounded-t">
          <div className="flex justify-between">
            <div className="w[60%] h-[40%] px-6 py-4 text-lg text-white font-bold">
              {questions.title}
            </div>
            <div className="w-[40%] ">
              <div className="rounded-lg float-right mr-6 my-4 border gap-3  flex  ">
                <div className=" pl-4 text-xl text-white cursor-pointer">-</div>
                <div className="border-l py-1 border-r px-5 font-semibold text-white">
                  {questions.score}
                </div>
                <div className=" cursor-pointer px-2 text-2xl text-white">
                  +
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between">
            <div className="flex my-3 font-bold text-white px-6">
              <div>
                <img
                className="h-10 rounded-full"
                src={questions.owner.profile_image}
                alt="logo"
              />
              </div>
              <div className="text-white py-2 mx-2">
              {questions.owner.display_name}
            </div>
              <div className="inline-block px-2 py-2  rounded-md bg-orange-400 bg-opacity-4">
                {questions.owner.reputation}
              </div>
            </div>
            <div className="flex text-white text-xs  font-semibold px-6 py-6 gap-2 ">
              <div>
                Asked {formatDate(questions.creation_date)}
                <span className="px-2">|</span>
              </div>
              <div>
                Active {formatDate(questions.last_activity_date)}
                <span className="px-2">|</span>
              </div>
              <div>Viewes {questions.view_count} times</div>
            </div>
          </div>
        </div>

        <div
          className="px-6 py-5"
          dangerouslySetInnerHTML={{ __html: questions.body }}
        />

        <div className="flex justify-between py-3">
          <div className="flex  px-6">
            <img
              className="h-9"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/save-4897643-4081326.png?f=webp"
              alt=""
            />
            <div className="text-orange-500 text-lg py-1 font-semibold">20</div>
          </div>
          <div className="flex gap-5 px-6">
            {" "}
            <img
              className="h-6 cursor-pointer"
              src="https://pngimg.com/d/share_PNG27.png"
              alt=""
            />
            <img
              className="h-6 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
              alt=""
            />
          </div>
        </div>
      </div>

      </>
    ):(
      <>
      
      </>
    )}
      

      <hr />
      <div className="flex mt-5 justify-between">
        <div className="px-6 py-4">{answers.length} Answers</div>
        <div className="flex gap-5 px-6 text-xs font-medium py-5">
          <div className="text-orange-500 border-b-2 border-orange-500 font-bold">
            Votes
          </div>
          <div>Oldest</div>
          <div>Active</div>
        </div>
      </div>
      {answers.length !== 0 ? (
        answers.map((el) => {
          return (
            <>
              <div className=" shadow-lg  rounded-lg py-5">
                <div className="w-full  bg-gray-200 rounded-t">
                  <div className="flex justify-between">
                    <div className=" w-[100%] h-[40%] p-6 text-sm flex">
                      Author : {" "}
                      <span className="w-[15rem] px-2 text-orange-500 font-semibold">
                        {el.owner.display_name} ({el.owner.reputation})
                      </span>
                      <div className="px-6">Answered : {formatDate(el.creation_date)}</div>
                    </div>
                    <div className="w-[40%]">
                      <div className="rounded-lg border gap-3 mt-4 mr-8  float-right bg-orange-500  flex w-[9rem] ">
                        <div className=" pl-4 text-xl text-white cursor-pointer">
                          -
                        </div>
                        <div className="border-l py-1 border-r px-5 font-semibold text-white">
                          {el.score}
                        </div>
                        <div className=" cursor-pointer  text-2xl text-white">
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="text-white" />
                </div>
                {/* <hr /> addd  */}
                <div
                  className="px-6 py-5"
                  dangerouslySetInnerHTML={{ __html: el.body }}
                />
              
              </div>
            </>
          );
        })
      ) : (
        <>
          <div>No Answer Found</div>
        </>
      )}

      {/* answer */}
    </>
  );
}

export default QuestionDetail;
