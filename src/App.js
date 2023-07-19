import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// TODO: explain how to setup bootstrap - easily, no components
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { MealPage } from "./pages/MealPage";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals/:idMeal" element={<MealPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
