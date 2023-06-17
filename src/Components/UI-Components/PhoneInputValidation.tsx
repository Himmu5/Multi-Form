import { FC } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

type P = {};
const PhoneInputValidation: FC<P> = () => {
  return (
    <div className="flex flex-col space-y-2 ">
      <label className=" text-sm">Phone Number:</label>
      <PhoneInput
      inputStyle={{ width : "100%"}}
        country={"in"}
        inputProps={{
          required: true,
        }}
      />
    </div>
  );
};
export default PhoneInputValidation;
