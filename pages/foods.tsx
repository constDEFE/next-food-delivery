import { Food, Sort } from "types";
import { FC, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import Container from "components/UI/Container";
import FoodCard from "components/FoodCard";
import CustomHead from "components/UI/CustomHead";
import Pagination from "components/UI/Pagination";
import SectionHeader from "components/UI/SectionHeader";
import styles from "@modules/pages/FoodsPage.module.scss";

interface FoodsPageProps {
  foods: Food[];
}

const FoodsPage: FC<FoodsPageProps> = ({ foods: initialFoods }) => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [foods, setFoods] = useState<Food[]>(initialFoods);

  const perPage = 12;
  const foodsStart = (currentPage - 1) * perPage;
  const foodsEnd = foodsStart + perPage;
  const displayedFoods = foods.slice(foodsStart, foodsEnd);

  const sortFoods = (sort: Sort): void => {
    switch (sort) {
      case "default":
        return setFoods(initialFoods);
      case "a-z":
        return setFoods([...foods.sort((a, b) => a.title.localeCompare(b.title))]);
      case "z-a":
        return setFoods([...foods.sort((a, b) => b.title.localeCompare(a.title))]);
      case "high":
        return setFoods([...foods.sort((a, b) => b.price - a.price)]);
      case "low":
        return setFoods([...foods.sort((a, b) => a.price - b.price)]);
    }
  };

  const filterFoods = (arr: Food[], filter: string): Food[] => {
    return arr.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase().trim()));
  };

  useEffect(() => {
    if (!search) setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <CustomHead title="All Foods" />
      <SectionHeader title="All Foods" />
      <section>
        <Container>
          <form className={styles.form}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="I'm looking for..."
            />
            <select
              onChange={(e) => sortFoods(e.target.value as Sort)}
              name="filter"
              id="filter"
              defaultValue={"default"}
            >
              <option value="default">Default</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="high">Highest Price</option>
              <option value="low">Lowest Price</option>
            </select>
          </form>
        </Container>
        <Container className={styles.container}>
          {search
            ? filterFoods(foods, search).map((item) => (
                <FoodCard key={item.id} food={item} />
              ))
            : displayedFoods.map((item) => (
                <FoodCard key={item.id} food={item} />
              ))}
        </Container>
        <Container className={styles.paginationContainer}>
          <Pagination
            amount={filterFoods(foods, search).length}
            perPage={perPage}
            paginate={setCurrentPage}
            className={styles.pagination}
            currentPageClassName={styles.currentPage}
            currentPage={currentPage}
          />
        </Container>
      </section>
    </>
  );
};

export default FoodsPage;

export const getStaticProps = async () => {
  const q = query(collection(db, "foods"));
  const { docs } = await getDocs(q);
  const foods = docs.map((doc) => doc.data());

  return {
    props: {
      foods,
    },
    revalidate: 3600,
  };
};
