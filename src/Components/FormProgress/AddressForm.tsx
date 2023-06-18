import { FC, useEffect } from "react";
import Input from "../UI-Components/Input";
import Button from "../UI-Components/Button";
import { FormikBag, FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../Redux/store";
import { isSavedAddresses } from '../../Redux/selector/progress'
import { saveaddressDetails, selectPage } from "../../Redux/slices/Progress";
import { Link } from "react-router-dom";

type P = I & R
type I = FormikProps<AddressState>
type R = {} & ReduxProps 

const AddressForm: FC<P> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched,
  isValid,
  saved,
  selectPage
}) => {
  useEffect(()=>{
    selectPage(2);
  },[])
  return (
    <div className="max-w-5xl mx-auto my-5 border rounded-md p-4">
      <h1 className="text-xl ">Address</h1>

      <form className=" " onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full py-2">
          <Input
            type="text"
            touch={touched.addressOne}
            onBlur={handleBlur}
            children="Address line one."
            name="addressOne"
            error={errors.addressOne}
            placeholder="Address line one"
            value={values.addressOne}
            onChange={handleChange}
          />
          <Input
            type="text"
            touch={touched.addressTwo}
            onBlur={handleBlur}
            placeholder="Address line two"
            children="Address line two."
            name="addressTwo"
            error={errors.addressTwo}
            value={values.addressTwo}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            children="City"
            placeholder="Enter the City"
            name="city"
            error={errors.city}
            touch={touched.city}
            onBlur={handleBlur}
            value={values.city}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Enter the State"
            children="State"
            name="state"
            error={errors.state}
            touch={touched.state}
            onBlur={handleBlur}
            value={values.state}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            children="Pincode"
            placeholder="Enter the pincode"
            name="pincode"
            error={errors.pincode}
            touch={touched.pincode}
            onBlur={handleBlur}
            value={values.pincode}
            onChange={handleChange}
          />
          <Input
            type="text"
            children="Country"
            name="country"
            error={errors.country}
            placeholder="Enter the pincode"
            touch={touched.country}
            onBlur={handleBlur}
            value={values.country}
            onChange={handleChange}
          />
        </div>

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
          {saved && <Link to={"/SingleFileUploader"}> <Button mode="primary" children="Next" /></Link>}
        </div>
      </form>
    </div>
  );
};

const initialValues = {
  addressOne: "",
  addressTwo: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
};

export type AddressState = typeof initialValues;

const schema = Yup.object().shape({
  addressOne: Yup.string().required().min(2),
  addressTwo: Yup.string().required().min(2),
  city: Yup.string().required().min(2),
  state: Yup.string().required().min(2),
  pincode: Yup.string().required().min(2),
  country: Yup.string().required().min(2),
});

function Submit(values: AddressState , bag:FormikBag<P , AddressState>) {
  console.log("Values :", values);
  bag.props.saveaddressDetails(values);
}

const HOC = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: Submit,
  validationSchema: schema,
  validateOnMount: true,
});

const mapStateToProps = (state: State) => {
  return { saved: isSavedAddresses(state) };
};
const mapDispatchToProps = {
  saveaddressDetails,
  selectPage
}

const connector = connect(mapStateToProps , mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>

export default connector(HOC(AddressForm)) as any 
