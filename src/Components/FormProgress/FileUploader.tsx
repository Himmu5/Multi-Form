import { FC } from "react";

type P = {
  storeFile:(f:File)=>void
};

const FileUploader: FC<P> = ({ storeFile }) => {
  return (
    <div className="relative group w-full h-28 bg-PrimaryGray rounded-lg border-dashed border mt-5 mb-3 flex justify-center items-center text-sm ">
      <div className="absolute inset-0 w-full h-full   bg-opacity-80 backdrop-blur-xl group-hover:bg-opacity-70 "></div>
      <input
        accept=".pdf, .png"
        className="relative z-10 opacity-0 h-full w-full cursor-pointer"
        onChange={(e) => storeFile(e.target.files![0])}
        type="file"
        name="bgfile"
        id="bgfile"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
        <div className="space-y-6 text-center w-full ">
          <p className="text-gray-700 text-sm w-full">
            <span className="text-PrimaryBlue "> Choose file </span> to upload
          </p>
        </div>
      </div>
    </div>
  );
};
export default FileUploader;
