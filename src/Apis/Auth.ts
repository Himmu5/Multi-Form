import axios from "axios";

export const loginUser = () => {
  return axios
    .post(import.meta.env.VITE_BASE_URL+"/auth/login", {
      email: "levitation@levitation.in",
      password: "levitation",
    })
    .then((res) => {
      console.log("Success :", res);
    })
    .catch((err) => {
      console.log("Error :", err);
    });
};
