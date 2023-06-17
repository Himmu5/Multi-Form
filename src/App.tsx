import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn";
import AuthRoute from "./Routes/AuthRoute";
import UserRoute from "./Routes/UserRoute";
import Reset from "./Components/Pages/Reset";
import Alert from "./Components/UI-Components/Alert";
import Progressbar from "./Components/FormProgress/Progressbar";
import BasicDetails from "./Components/FormProgress/BasicDetail";
import AddressForm from "./Components/FormProgress/AddressForm";
import SingleFileUpload from "./Components/FormProgress/SingleFileUpload";

function App() {
  return (
    <div className="relative m-2">
      <Alert />
      <Routes>
        <Route
          path="*"
          element={
            <AuthRoute>
              <Progressbar />
            </AuthRoute>
          }
        />
        <Route
          path="/Signin"
          element={
            <UserRoute>
              <SignIn />
            </UserRoute>
          }
        />
        <Route path="/Reset" element={<Reset />} />
      </Routes>

      <Routes >

          <Route path="/" element={<BasicDetails />} />
          <Route path="/AddressForm" element={<AddressForm />} />
          <Route path="/SingleFileUploader" element={<SingleFileUpload />} />

      </Routes>
      
    </div>
  );
}

export default App;
