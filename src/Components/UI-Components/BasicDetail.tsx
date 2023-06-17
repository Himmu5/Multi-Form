import { FC } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import PhoneInputValidation from "./PhoneInputValidation";
type P = {};
const BasicDetails: FC<P> = () => {
  return (
    <div className="max-w-5xl flex flex-col mx-auto my-2 ">
      <Input type="text" children="Name"  />
      <Input type="email" children="email"/>
      <PhoneInputValidation />
      <Link to={"/AddressForm"} className=" mt-2 ">
        <Button mode="primary">Next</Button>
      </Link>
    </div>
  );
};
export default BasicDetails;
