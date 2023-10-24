import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Signin from "./components/Signin";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Error />}/> */}
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/" element={<Jobs />} /> */}
          {/* <Route path="/jobs/:id" element={<Application />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
