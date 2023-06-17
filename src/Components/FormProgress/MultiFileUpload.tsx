import { FC, useState } from "react";
import FileUploader from "./FileUploader";
type P = {};
const MuliFileUpload: FC<P> = () => {
  const [files, setFiles] = useState<File[]>([]);

  function storeFile(file: File) {
    setFiles([...files, file]);
  }
  console.log("Files loaded : ", files);

  return (
    <div>
      <FileUploader storeFile={storeFile!} />
    </div>
  );
};
export default MuliFileUpload;
