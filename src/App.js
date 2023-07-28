import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { MealPage } from "./pages/MealPage";
import FavoritesMealsPage from "./pages/FavoritesMealsPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/meals" element={<HomePage />} />
          <Route path="/meals/:idMeal" element={<MealPage />} />
          <Route path="/favorites" element={<FavoritesMealsPage />} />
          {/* TODO:User */}
          {/* <Route path="/user" element={<UserPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
