import { FC, InputHTMLAttributes } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

type P = {} & InputHTMLAttributes<HTMLInputElement>;

const PhoneInputValidation: FC<P> = ({ onChange, value, ...rest }) => {
  return (
    <div className="flex flex-col space-y-2 ">
      <label className=" text-sm">Phone Number:</label>
      <PhoneInput
        value={value as any}
        onChange={onChange as any}
        inputStyle={{ width: "100%" }}
        country={"in"}
        inputProps={{
          required: true,
          ...rest,
        }}
      />
    </div>
  );
};
export default PhoneInputValidation;
