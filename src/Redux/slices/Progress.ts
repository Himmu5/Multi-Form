import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddressState } from "../../Components/FormProgress/AddressForm";

const initialState = {
  BasicDetails: { name: "", email: "", phoneNo: "" , save :false },
  addressDetails: {
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    save : false
  },
  currentPage : 1
};
type State = typeof initialState;

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    selectPage : pageSelector,
    storeBasicDetails: storeBasiceInfo,
    saveaddressDetails: storeAddressInfo,
  },
});

function pageSelector(state : State , action:PayloadAction<number>){
  state.currentPage = action.payload;
}

function storeAddressInfo(state: State, action: PayloadAction<AddressState>) {
  const data = action.payload;
  state.addressDetails.addressOne = data.addressOne;
  state.addressDetails.addressTwo = data.addressTwo;
  state.addressDetails.city = data.city;
  state.addressDetails.state = data.state;
  state.addressDetails.country = data.country;
  state.addressDetails.pincode = data.pincode;
  state.addressDetails.save = true;
}

function storeBasiceInfo(
  state: State,
  action: PayloadAction<{ name: string; email: string; phoneNo: string }>
) {
  const data = action.payload;
  state.BasicDetails.email = data.email;
  state.BasicDetails.name = data.name;
  state.BasicDetails.phoneNo = data.phoneNo;
  state.BasicDetails.save = true;
}

export const { selectPage , storeBasicDetails , saveaddressDetails} = progressSlice.actions;
export const progressReducer = progressSlice.reducer;
