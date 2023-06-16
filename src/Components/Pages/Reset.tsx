import { FC } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";

type P = {};

const Reset: FC<P> = () => {
  return (
    <div className="min-h-screen bg-gray-50  flex justify-center items-center ">
      <form className="max-w-lg w-full bg-white p-10 shadow-xl flex flex-col gap-2">
        <h1 className="text-xl ">Reset you password</h1>
        <Input type={"email"} placeholder="Enter your email">
          Email
        </Input>
        <Button mode="primary">Reset password</Button>
      </form>
    </div>
  );
};
export default Reset;
