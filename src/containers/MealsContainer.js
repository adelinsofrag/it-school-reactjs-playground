import MealComponent from "../components/MealComponent";
import TitleComponent from "../components/TitleComponent";

const MealsContainer = (props) => {
  return (
    <div className="w-100 p-3">
      <div className="mb-4">
        <TitleComponent text={`Latest Meals`} />
      </div>
      <div className="row row-gap-5">
        {props.data.meals.slice(0, 10).map((meal) => (
          <MealComponent
            title={meal.strMeal}
            imageSRC={meal.strMealThumb}
            key={meal.idMeal}
            idMeal={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default MealsContainer;
