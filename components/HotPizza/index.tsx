import { FC } from "react";
import { Food } from "types";
import Container from "components/UI/Container";
import FoodCard from "components/FoodCard";
import styles from "@modules/HotPizza.module.scss";

interface HotPizzaProps {
  foods: Food[];
}

const HotPizza: FC<HotPizzaProps> = ({ foods }) => {
  return (
    <section className={styles.section}>
      <Container>
        <h2>Hot Pizza</h2>
        <div className={styles.container}>
          {foods
            .filter((food) => food.category === "pizza")
            .map((food, i) => <FoodCard food={food} key={food.id} />)}
        </div>
      </Container>
    </section>
  );
};

export default HotPizza;
