/* eslint-disable no-unused-vars */
import { RouterProvider } from "react-router-dom";
import { auth } from "./firebase/firebase";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import router from "./pages/constants/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />{" "}
      {/* This provides the router context */}
    </>
  );
}

export default App;
