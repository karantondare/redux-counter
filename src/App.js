import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.count);

  return (
    <div className="flex flex-col justify-center items-center pb-12 h-screen">
      <h1 className="text-center m-8 text-5xl text-blue-500">Redux Counter</h1>
      <div className="flex flex-row justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className="m-4 py-8 px-16 bg-gray-200 text-3xl text-blue-500 rounded-lg">
          {data <= 9 ? `0${data}` : data}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
