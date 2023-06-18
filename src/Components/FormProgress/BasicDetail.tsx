import { FC, useEffect, useState } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import PhoneInputValidation from "../UI-Components/PhoneInputValidation";
import { useFormik } from "formik";
import { ConnectedProps, connect } from "react-redux";
import { selectPage, storeBasicDetails } from "../../Redux/slices/Progress";
import { getBasicDetails, isSavedBasicDetails } from "../../Redux/selector/progress";
import { State } from "../../Redux/store";
import { Link } from "react-router-dom";

type P = {} & ReduxProps;

const BasicDetails: FC<P> = ({ storeBasicDetails, BasicDetails ,saved , selectPage }) => {

  useEffect(()=>{
    selectPage(1);
  },[])

  const initialValues = { name: "", email: "" };
  const [phoneNo, setPhoneNo] = useState("");
  type I = typeof initialValues;
  const submit = () => {
    storeBasicDetails({ ...values, phoneNo });
  };
  const { values, handleChange, handleSubmit , isValid } = useFormik({
    initialValues,
    onSubmit: submit,
  });

  return (
    <form
      className="max-w-5xl flex flex-col mx-auto my-2 space-y-1 "
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        children="Name"
        placeholder="Enter your name"
        name={"name"}
        value={values.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        children="email"
        placeholder="Enter your email"
        name={"email"}
        value={values.email}
        onChange={handleChange}
      />
      <PhoneInputValidation
        type="text"
        name={"phoneNo"}
        value={BasicDetails.phoneNo}
        onChange={(e) => setPhoneNo(e as any)}
      />
      
      <div className="flex gap-2">
          <Button
            mode="secondary"
            children="Save"
            extraClasses={
              isValid
                ? "  "
                : " bg-gray-100 hover:bg-gray-100 hover:scale-100 cursor-not-allowed "
            }
            disabled={!isValid}
          />
          {saved && <Link to={"/AddressForm"}> <Button mode="primary" children="Next" /></Link>}
        </div>
    </form>
  );
};

const mapStateToProps = (state: State) => ({
  BasicDetails: getBasicDetails(state),
  saved : isSavedBasicDetails(state)
});
const mapDispatchToProps = {
  storeBasicDetails,
  selectPage
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(BasicDetails);
