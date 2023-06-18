import { FC } from "react";
import PageCountMapper from "../UI-Components/PageCountMapper";

type P = {};

const Progressbar: FC<P> = () => {
  return (
    <div className="flex pt-20 text-gray-600 w-full">
      <div className=" w-full max-w-6xl mx-auto my-4 border-b-2 pb-4">
        <div className="flex pb-3 px-4">
          <div className="flex-1"></div>

          <PageCountMapper />

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
