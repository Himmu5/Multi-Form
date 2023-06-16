import axios from "axios";

export const loginUser = () => {
  return axios
    .post("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
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
