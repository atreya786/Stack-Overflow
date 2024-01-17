import React from "react";
import { useNavigate } from "react-router-dom";
function Mainbar({ questions }) {
  const navigate = useNavigate();

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
  const handleClick = (id) => {
    navigate(`/question/${id}`);
  };

  return (
    <>
      {questions.map((e) => {
        return (
          <>
            <div
              onClick={() => handleClick(e.question_id)}
              className=" cursor-pointer shadow-lg  rounded-lg my-5"
            >
              <div
                key={e.question_id}
                className="w-full  bg-orange-600 rounded-t"
              >
                <div className="flex justify-between">
                  <div className="w[60%] h-[40%] px-6 py-4 text-lg text-white font-bold">
                    {e.title}
                  </div>
                  <div className="w-[40%] ">
                    <div className="rounded-lg float-right mr-6 my-4 border gap-3  flex  ">
                      <div className=" pl-4 text-xl text-white cursor-pointer">
                        -
                      </div>
                      <div className="border-l py-1 border-r px-5 font-semibold text-white">
                        {e.score}
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
                        src={e.owner.profile_image}
                        alt=""
                      />
                    </div>
                    <div className="text-white py-2 mx-2">
                      {e.owner.display_name}
                    </div>
                    <div className="inline-block px-2 py-2  rounded-md bg-orange-400 bg-opacity-4">
                      {e.owner.reputation}
                    </div>
                  </div>
                  <div className="flex text-white text-xs  font-semibold px-6 py-6 gap-2 ">
                    <div>
                      Asked {formatDate(e.creation_date)}
                      <span className="px-2">|</span>
                    </div>
                    <div>
                      Active {formatDate(e.last_activity_date)}
                      <span className="px-2">|</span>
                    </div>
                    <div>Viewes {e.view_count} times</div>
                  </div>
                </div>
              </div>
              {/* <hr /> addd  */}
              {/* <div className="px-6 py-5">{e.body}</div> */}

              <div
                className="px-6 py-5"
                dangerouslySetInnerHTML={{
                  __html:
                    e.body.length > 300 ? e.body.slice(0, 300) + "..." : e.body,
                }}
              />

              <div className="flex justify-between py-3">
                <div className="flex  px-6">
                  <img
                    className="h-9"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/save-4897643-4081326.png?f=webp"
                    alt=""
                  />
                  <div className="text-orange-500 text-lg py-1 font-semibold">
                    20
                  </div>
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
        );
      })}
    </>
  );
}

export default Mainbar;
