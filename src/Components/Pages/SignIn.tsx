import { FC, useEffect } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../Apis/Auth";

type P = {} & FormikProps<I>;
const SignIn: FC<P> = ({ values, handleChange , handleSubmit }) => {

    useEffect(()=>{
        loginUser()
    },[])   


  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 ">
      <form className=" rounded-md bg-white p-10 shadow-xl space-y-2 " onSubmit={handleSubmit}>
        <h1 className="py-4 text-xl">Sign in with email/password</h1>

        <Input
          type="email"
          name={'email'}
          value={values.email}
          onChange={handleChange}
          extraClass="border border-gray-400 "
          placeholder="test@test.com"
        >
          Your email
        </Input>
        <Input
          type="password"
          name={"password"}
          value={values.password}
          onChange={handleChange}
          extraClass="border border-gray-400 "
          placeholder="......"
        >
          Your password
        </Input>

        <Button type="submit" mode="primary">
          Login with your Account
        </Button>
      </form>
    </div>
  );
};

const initialValues = {
  email: "",
  password: "",
};
type I = typeof initialValues;

const schema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().min(8),
});

function submit(values:I) {
    console.log(values , " values ");
}

const HOC = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: submit,
  validationSchema: schema,
});

export default HOC(SignIn);
