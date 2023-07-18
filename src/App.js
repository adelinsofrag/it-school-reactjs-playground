import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:param" element={<HomePage />} />
          <Route path="/testing" element={<TestPage />} />
          <Route path="/testing/:param" element={<TestPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
