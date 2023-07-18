import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:param" element={<HomePage />} />
        <Route path="/testing" element={<TestPage/>} />
        <Route path="/testing/:param" element={<TestPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;