import { FC } from "react";
type P = {
    files : File[]
};
const FilesMapper: FC<P> = ({ files }) => {
    if(files.length === 0){
        return <div className="text-sm">No Files to show!!!</div>
    }
  return (
    <>
      {files.map((file) => {
        return (
          <div className="p-3 rounded-md shadow-xl  bg-indigo-400 text-white">
            {file?.name}
          </div>
        );
      })}
    </>
  );
};
export default FilesMapper;
