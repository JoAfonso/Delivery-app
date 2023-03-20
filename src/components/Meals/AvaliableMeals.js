import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvaliableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { Rings } from "react-loader-spinner";

const AvaliableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://delivery-meal-1447b-default-rtdb.firebaseio.com/meal.json")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const avlbMeals = [];
        for (const key in data) {
          avlbMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(avlbMeals);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsIsLoading}>
        <Rings color="red" height="150" width="150" ariaLabel="rings-loading"  radius="12"/>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
