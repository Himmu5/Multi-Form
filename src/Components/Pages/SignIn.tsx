import { FC } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import { FormikBag, FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { ConnectedProps, connect } from "react-redux";
import { AuthUser } from "../../Redux/slices/Auth";

import { Link } from "react-router-dom";

type P = {} & FormikProps<I> & ReduxProps;

const SignIn: FC<P> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50  border rounded-md p-2">
      <form
        className=" rounded-md bg-white p-5 sm:p-10 shadow-xl space-y-2 max-w-md w-full flex flex-col "
        onSubmit={handleSubmit}
      >
        <h1 className="py-4 text-xl">Sign in with email/password</h1>

        <Input
          type="email"
          name={"email"}
          touch={touched.email!}
          value={values.email}
          onBlur={handleBlur}
          error={errors.email!}
          onChange={handleChange}
          extraClass="border border-gray-400 "
          placeholder="test@test.com"
        >
          email
        </Input>
        <Input
          type="password"
          touch={touched.password!}
          onBlur={handleBlur}
          name={"password"}
          error={errors.password!}
          value={values.password}
          onChange={handleChange}
          extraClass="border border-gray-400 font-bold text-xl placeholder:text-2xl "
          placeholder="......"
        >
          password
        </Input>

        <Button type="submit" mode="primary">
          Login with your Account
        </Button>

        <Link to={"/Reset"} className="text-xs underline ">
          Forget your password
        </Link>
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
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

function submit(values: I, bag: FormikBag<P, I>) {
  bag.props.AuthUser(values);
}

const HOC = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: submit,
  validationSchema: schema,
});

const mapDispatchToProps = {
  AuthUser,
};

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(HOC(SignIn)) as any;
