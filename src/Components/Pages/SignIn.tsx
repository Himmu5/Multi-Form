import { FC } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import { withFormik } from "formik";

type P = {};
const SignIn: FC<P> = () => {
//   useEffect(() => {
//     axios
//       .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
//         email: "levitation@levitation.in",
//         password: "levitation",
//       })
//       .then((res) => {
//         console.log("Success :", res);
//       })
//       .catch((err) => {
//         console.log("Error :", err);
//       });
//   }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 ">
      <form className=" rounded-md bg-white p-10 shadow-xl space-y-2 ">
        <h1 className="py-4 text-xl">Sign in with email/password</h1>

        <Input
          type="email"
          extraClass="border border-gray-400 "
          placeholder="test@test.com"
        >
          Your email
        </Input>
        <Input
          type="password"
          extraClass="border border-gray-400 "
          placeholder="......"
        >
          Your password
        </Input>

        <Button mode="primary">Login with your Account</Button>
      </form>
    </div>
  );
};


export default SignIn;
