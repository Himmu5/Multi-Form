import { FC } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import { Link } from "react-router-dom";

type P = {};
const AddressForm: FC<P> = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 border rounded-md p-4">
      <h1 className="text-xl ">Address</h1>

      <form className=" ">
        <div className="flex gap-2 w-full">
          <Input type="text" children="Address line one." />
          <Input type="text" children="Address line two." />
        </div>
        <div className="flex gap-2">
          <Input type="text" children="City" />
          <Input type="text" children="State" />
        </div>
        <div className="flex gap-2">
          <Input type="text" children="Pincode" />
          <Input type="text" children="Country" />
        </div>
        <Link to={"/SingleFileUploader"}>
        <Button mode="primary" children="Next" />
        </Link>
      </form>
    </div>
  );
};
export default AddressForm;
