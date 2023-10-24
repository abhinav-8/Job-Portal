import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Signin from "./components/Signin";
import Signup from "./components/signup";
import Job from "./components/Job";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Error />}/> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Job />} />
          {/* <Route path="/jobs/:id" element={<Application />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
