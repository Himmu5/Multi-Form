import { FC } from "react";
import ProgressCount from "../UI-Components/ProgressCount";
type P = {};
const Progressbar: FC<P> = () => {
  return (
    <div className="flex pt-20 text-gray-600 w-full">
      <div className=" w-full max-w-6xl mx-auto my-4 border-b-2 pb-4">
        <div className="flex pb-3 px-4">
          <div className="flex-1"></div>

          <div className="flex-1">
            <div className="w-10 h-10 bg-indigo-500 text-white mx-auto rounded-full text-lg border-2 flex items-center">
              <span className=" text-center w-full">
                <i className="fa fa-check w-full fill-current ">1</i>
              </span>
            </div>
          </div>
          
          <ProgressCount progress={100} count={2} />

          <ProgressCount progress={100} count={3} />

          <ProgressCount progress={20} count={4} />
          <ProgressCount progress={0} count={5} />

          <div className="flex-1"></div>
        </div>

        <div className="flex  content-center text-center ">
          <div className="w-1/5">Basic Details</div>

          <div className="w-1/5">Address </div>

          <div className="w-1/5">File Upload</div>

          <div className="w-1/5">Multi File Upload/Geolocation</div>
          <div className="w-1/5"> Status Field</div>
        </div>
      </div>
    </div>
  );
};
export default Progressbar;
