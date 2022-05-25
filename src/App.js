import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { DefaultLayout } from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Navigate to={"/login"} />}></Route>
          <Route
            path="/home"
            element={<DefaultLayout exact path="/home" component={HomePage} />}
          ></Route>

          <Route
            path="/login"
            element={<DefaultLayout exact path="/login" component={Login} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
