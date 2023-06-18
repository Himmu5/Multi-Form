import axios from "axios";

export const loginUser = (values: { email: string; password: string }) => {
  return axios
    .post(import.meta.env.VITE_BASE_URL + "/auth/login", values)
    .then((res) => {
      return res.data;
    }).catch((err)=>{
      return err.response?.data || undefined ;
    })
};
