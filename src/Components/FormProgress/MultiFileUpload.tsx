import { FC, useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import { ConnectedProps, connect } from "react-redux";
import { selectPage } from "../../Redux/slices/Progress";
import { FormikProps, withFormik } from "formik";
import { setAlert } from "../../Redux/slices/Auth";
import FilesMapper from "../UI-Components/FilesMapper";
import Button from "../UI-Components/Button";
// import { Link } from "react-router-dom";

type P = {} & ReduxProps & FormikProps<I>;

const MuliFileUpload: FC<P> = ({ selectPage , setAlert }) => {
  const [files, setFiles] = useState<File[]>([]);
  console.log("files , ", files);
  useEffect(() => {
    selectPage(4);
  }, []);

  function storeFile(file: File) {
    if (files.length < 5) {
      setFiles([...files, file]);
    }
    else{
      setAlert({message: "Can't upload more than 5 files" , type : "error"});
    }
  }

  return (
    <div className="max-w-5xl mx-auto m-3 ">
      <h1 className="">You can upload upto 5 files</h1>
      <FileUploader storeFile={storeFile!} />

      <div className="flex gap-2">
          <Button
            mode="secondary"
            children="Save And Upload"
            extraClasses={
              files.length >= 1
                ? "  "
                : " bg-gray-100 hover:bg-gray-100 hover:scale-100 cursor-not-allowed "
            }
            disabled={files.length > 0}
          />
          {/* {<Link to={"/AddressForm"}> <Button mode="primary" children="Next" /></Link>} */}
        </div>

      <div className="flex flex-col gap-2 mt-5">
        <FilesMapper files={files} />
      </div>
    </div>
  );
};

const initialValues = {
  files: "",
};

type I = typeof initialValues;

function submit() {}

const hoc = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: submit,
});

const mapDispatchToProps = {
  selectPage,
  setAlert
};

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default hoc(connector(MuliFileUpload));
