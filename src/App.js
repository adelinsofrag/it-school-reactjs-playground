import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import "./App.css";
import HomepageView from "./views/HomepageView";
import TestPage from "./views/TestPage";
import FormPage from "./views/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageView />} />
        <Route path="/testing" element={<TestPage/>} />
        <Route path="/testing/:param" element={<TestPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;