import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Tasty Cuisine, Delivered To Your Doorstep</h2>
      <p>
        Select your preferred dish from our extensive menu and relish a
        scrumptious lunch or dinner in the comfort of your home.
      </p>
      <p>
        Our dishes are made using premium quality ingredients and are prepared
        fresh by our skilled chefs, ensuring a delightful dining experience for
        you
      </p>
    </section>
  );
};

export default MealsSummary;