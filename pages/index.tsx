import { FC } from "react";
import { db } from "../firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { Food, Testimonial } from "types";
import Categories from "components/Categories";
import Hero from "components/Hero";
import HotPizza from "components/HotPizza";
import PopularFoods from "components/PopularFoods";
import Services from "components/Services";
import Testimonials from "components/Testomonials";
import CustomHead from "components/UI/CustomHead";
import WhyUs from "components/WhyUs";

interface HomePageProps {
  popularFoods: Food[];
  hotPizza: Food[];
  testimonials: Testimonial[];
}

const HomePage: FC<HomePageProps> = ({ popularFoods, hotPizza, testimonials }) => {
  return (
    <>
      <CustomHead title="Home" />
      <Hero />
      <Categories />
      <Services />
      <PopularFoods foods={popularFoods} />
      <WhyUs />
      <HotPizza foods={hotPizza} />
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const popularFoodsQuery = query(collection(db, "foods"), limit(8));
  const { docs: popularFoodsDocs } = await getDocs(popularFoodsQuery);
  const popularFoods = popularFoodsDocs.map((doc) => doc.data());

  const hotPizzaQuery = query(
    collection(db, "foods"),
    where("category", "==", "pizza"),
    limit(4)
  );
  const { docs: hotPizzaDocs } = await getDocs(hotPizzaQuery);
  const hotPizza = hotPizzaDocs.map((doc) => doc.data());

  const testimonialsQuery = query(collection(db, "testimonials"), limit(4));
  const { docs: testimonialsDocs } = await getDocs(testimonialsQuery);
  const testimonials = testimonialsDocs.map((doc) => doc.data());

  return {
    props: {
      popularFoods,
      hotPizza,
      testimonials,
    },
    revalidate: 3600,
  };
};
