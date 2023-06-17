import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn";
import Home from "./Components/Pages/Home";
import AuthRoute from "./Routes/AuthRoute";
import UserRoute from "./Routes/UserRoute";
import Reset from "./Components/Pages/Reset";
import Alert from "./Components/UI-Components/Alert";

function App() {
  return (
    <div className="relative ">
      <Alert />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
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
    </div>
  );
}

export default App;
