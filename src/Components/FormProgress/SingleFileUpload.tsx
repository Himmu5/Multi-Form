import { FC, useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import Button from "../UI-Components/Button";
import { Link } from "react-router-dom";
import { saveSingleFile, selectPage } from "../../Redux/slices/Progress";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../Redux/store";
import { isFileSaved } from "../../Redux/selector/progress";

type P = {} & ReduxProps;

const SingleFileUpload: FC<P> = ({ selectPage , saved , saveSingleFile}) => {
  const [file, setFile] = useState<string | ArrayBuffer>("");
  console.log("upload : ", file);

  function storeFile(f: File) {
    const reader = new FileReader();
    reader.readAsBinaryString(f);

    reader.onload = (e) => {
      setFile(e.target?.result!);
    };
  }

  useEffect(() => {
    selectPage(3);
  }, [file]);

  function sendToReduxStore(f:string){
    saveSingleFile(f);
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col border p-2 m-2 ">
      <FileUploader storeFile={storeFile} />
      <div className="flex gap-2">
        <Button
          mode="secondary"
          children="Save"
          onClick={()=>sendToReduxStore(file as string)}
          extraClasses={
            file.toString().length !== 0
              ? "  "
              : " bg-gray-100 hover:bg-gray-100 hover:scale-100 cursor-not-allowed "
          }
          disabled={file.toString().length === 0}
        />
        {saved && (
          <Link to={"/MultiFileUploader"}>
            <Button mode="primary" children="Next" />
          </Link>
        )}
      </div>

      <div className="my-10"></div>
    </div>
  );
};

const mapDispatchToProps = {
  selectPage,
  saveSingleFile
};

const mapStateToProps = (state:State)=>({ 
  saved : isFileSaved(state)
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SingleFileUpload);
