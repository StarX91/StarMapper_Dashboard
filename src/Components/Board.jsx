import React from "react";

const Board = () => {
  return (
    <div className="flex bg-black h-screen">
      <div className="bg-zinc-900 w-11/12 ml-20 mt-16 mb-24 rounded-2xl">
        <div className="text-center text-white mt-10">
          <p className="text-[40px]">Welcome to StarMapper</p>
          <p className="text-[20px] pt-10">
            Star-Mapper is a SaaS platform offering multiple services. Each
            service is uniquely designed with the highest secuirty<br></br> and
            simplicity to address the needs of the drone ecosystem
          </p>
        </div>
        <div className="">
          <div className="flex bg-zinc-800 w-3/5 h-32 mt-12 ml-80 rounded-3xl">
            <div className="">
              <img src="" alt="img" className="ml-16 mt-12 " />
            </div>

            <div>
              <div className="mt-2 mx-28 text-white font-bold">
                Software Name
              </div>
              <div className="mt-2 mx-28 text-white text-justify">
                Plan missions,track flights, stream videos on cloud and get
                detailed logs for useful insights. Sync your Software projects
                with teams for greater degree of collaborations.
              </div>
            </div>
            <button className="bg-zinc-600 w-80 h-12 text-white text-center mr-16 mt-12 font-semibold rounded-xl">
              Explore Now
            </button>
          </div>
          <div className="flex bg-zinc-800 w-3/5 h-32 mt-4 ml-80 rounded-3xl">
            <div>
              <img src="" alt="img" className="ml-16 mt-8" />
            </div>
            <div>
              <div className="mt-2 mx-28 text-white font-bold">
                Software Name
              </div>
              <div className="mt-2 mx-28 text-white text-justify">
                Plan missions,track flights, stream videos on cloud and get
                detailed logs for useful insights. Sync your Software projects
                with teams for greater degree of collaborations.
              </div>
            </div>
            <button className="bg-zinc-600 w-80 h-12 text-white text-center mr-16 mt-10  font-semibold rounded-xl">
              Explore Now
            </button>
          </div>
          <div className="flex bg-zinc-800 w-3/5 h-32 mt-8 ml-80 rounded-3xl">
            <div>
              <img src="" alt="img" className="ml-16 mt-8 bg-zinc-800 w-1/5" />
            </div>
            <div>
              <div className="mt-2 mx-28 text-white font-bold">
                Software Name
              </div>
              <div className="mt-2 mx-28 text-white text-justify">
                Plan missions,track flights, stream videos on cloud and get
                detailed logs for useful insights. Sync your Software projects
                with teams for greater degree of collaborations.
              </div>
            </div>
            <button className="bg-zinc-600 w-80 h-12 text-white text-center mr-16 mt-10 font-semibold rounded-xl">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
