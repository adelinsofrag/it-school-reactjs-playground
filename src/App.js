import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomepageView from "./views/HomepageView";
import TestPage from "./views/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageView />} />
        <Route path="/testing" element={<TestPage/>} />
        <Route path="/testing/:param" element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;