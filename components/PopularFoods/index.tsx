import { FC, useState } from "react";
import { Filter, Food } from "types";
import Container from "components/UI/Container";
import FoodCard from "components/FoodCard";
import styles from "@modules/PopularFoods.module.scss";

interface PopularFoodsProps {
  foods: Food[];
}

const PopularFoods: FC<PopularFoodsProps> = ({ foods }) => {
  const [filter, setFilter] = useState<Filter>("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value as Filter);
  };

  const filterFoods = (foods: Food[], filter: Filter): Food[] => {
    if (filter === "all") return foods;

    return foods.filter((food) => food.category === filter);
  };

  return (
    <section>
      <Container className={styles.container}>
        <h2>Popular Foods</h2>
        <form id="filter">
          <input
            onChange={handleFilterChange}
            form="filter"
            defaultChecked
            type="radio"
            name="filter"
            value="all"
            id="all"
          />
          <label htmlFor="all">All</label>
          <input
            onChange={handleFilterChange}
            form="filter"
            type="radio"
            name="filter"
            value="burger"
            id="burger"
          />
          <label htmlFor="burger">
            🍔<span>Burger</span>
          </label>
          <input
            onChange={handleFilterChange}
            form="filter"
            type="radio"
            name="filter"
            value="pizza"
            id="pizza"
          />
          <label htmlFor="pizza">
            🍕<span>Pizza</span>
          </label>
          <input
            onChange={handleFilterChange}
            form="filter"
            type="radio"
            name="filter"
            value="bread"
            id="bread"
          />
          <label htmlFor="bread">
            🥖<span>Bread</span>
          </label>
        </form>
        <ul className={styles.foods}>
          {filterFoods(foods, filter).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PopularFoods;
