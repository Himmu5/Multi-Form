import { FC } from "react";
type P = {
  progress: number;
  count: number;
};
const ProgressCount: FC<P> = ({ progress, count }) => {
  
  return (
    <>
      <div className="w-1/6 align-center items-center align-middle content-center flex">
        <div
          className={
            "w-full bg-gray-200 rounded items-center align-middle align-center flex-1 "
          }
        >
          <div
            className="bg-indigo-500 text-xs leading-none py-1 text-center text-gray-200 rounded "
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className={"flex-1"}>
        <div
          className={
            " w-10 h-10 text-gray-400 border-2  mx-auto rounded-full text-lg flex items-center " +
            (progress ? " bg-indigo-500 text-white " : " ")
          }
        >
          <span className=" text-center w-full ">{count}</span>
        </div>
      </div>
    </>
  );
};
export default ProgressCount;
