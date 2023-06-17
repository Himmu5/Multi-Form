import { FC, useState } from "react";
import FileUploader from "./FileUploader";
import Button from "./Button";
type P = {};
const SingleFileUpload: FC<P> = () => {
  const [file, setFile] = useState<File>();
  return (
    <div className="max-w-5xl mx-auto flex flex-col border p-2 m-2 ">
        <FileUploader file={file!} setFile={setFile} />
        <Button mode="primary" children="Next" />
    </div>
  );
};
export default SingleFileUpload;
