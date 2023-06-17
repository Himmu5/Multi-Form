import { FC, useState } from "react";
import FileUploader from "./FileUploader";
import Button from "../UI-Components/Button";
import { Link } from "react-router-dom";
type P = {};
const SingleFileUpload: FC<P> = () => {
  const [file, setFile] = useState<File>();
  function storeFile(f:File){
    setFile(f);
  }
  return (
    <div className="max-w-5xl mx-auto flex flex-col border p-2 m-2 ">
        <FileUploader  storeFile={storeFile} />
        <Link to={"/MultiFileUploader"} className="w-full flex flex-col"><Button mode="primary" children="Next" /></Link>
    </div>
  );
};
export default SingleFileUpload;
