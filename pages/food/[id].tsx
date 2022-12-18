import { FC, useState } from "react";
import Image from "next/image";
import { capitalize } from "utils";
import { Food, Review, Tab } from "types";
import { GetStaticPropsContext } from "next";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addItem } from "redux/slices/cartSlice";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import FoodCard from "components/FoodCard";
import Container from "components/UI/Container";
import SectionHeader from "components/UI/SectionHeader";
import Reviews from "components/Reviews";
import styles from "@modules/pages/FoodPage.module.scss";

interface FoodPageProps {
  food: Food;
  related: Food[];
  reviews: Review[];
}

const FoodPage: FC<FoodPageProps> = ({ food, related, reviews }) => {
  const [preview, setPreview] = useState<string>(food.image1);
  const [tab, setTab] = useState<Tab>("desc");
  const dispatch = useAppDispatch();

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTab(event.target.value as Tab);
  };

  const handleButton = (): void => {
    dispatch(addItem(food));
  };

  const addReview = async (newReview: Review): Promise<void> => {
    await updateDoc(doc(db, "foods", String(food.id)), {
      reviews: [...reviews, newReview],
    });
  };

  return (
    <>
      <SectionHeader title={food.title} />
      <section>
        <Container className={styles.container}>
          <div className={styles.left}>
            <div className={styles.column}>
              <Image
                onClick={() => setPreview(food.image1)}
                src={food.image1}
                width={128}
                height={128}
                alt={"image1"}
                draggable={false}
              />
              <hr />
              <Image
                onClick={() => setPreview(food.image2)}
                src={food.image2}
                width={128}
                height={128}
                alt={"image2"}
                draggable={false}
              />
              <hr />
              <Image
                onClick={() => setPreview(food.image3)}
                src={food.image3}
                width={128}
                height={128}
                alt={"image3"}
                draggable={false}
              />
            </div>
            <Image
              src={preview}
              width={640}
              height={640}
              alt="preview.webp"
              draggable={false}
              priority
            />
          </div>
          <div className={styles.right}>
            <div>
              <h2>{food.title}</h2>
              <h4>
                Price:
                <span>${food.price}</span>
              </h4>
              <p>
                Category:
                <span>{capitalize(food.category)}</span>
              </p>
            </div>
            <button onClick={handleButton}>Add to Cart</button>
          </div>
        </Container>
        <Container>
          <div className={styles.tabs}>
            <input
              defaultChecked
              type="radio"
              onChange={handleRadio}
              value={"desc"}
              name="tab"
              id="tab1"
            />
            <label htmlFor="tab1">Description</label>
            <input
              type="radio"
              onChange={handleRadio}
              value={"review"}
              name="tab"
              id="tab2"
            />
            <label htmlFor="tab2">Reviews</label>
          </div>
          <div className={styles.tabContent}>
            {tab === "desc" ? (
              <p>{food.description}</p>
            ) : (
              <Reviews
                onSubmit={addReview}
                reviews={reviews}
                className={styles.reviews}
              />
            )}
          </div>
        </Container>
        <Container className={styles.related}>
          <h2>You may also like</h2>
          <ul>
            {related.map((item) => (
              <FoodCard food={item} key={item.id} />
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
};

export default FoodPage;

export const getStaticPaths = async () => {
  const q = query(collection(db, "foods"));
  const { docs } = await getDocs(q);
  const foods = docs.map((doc) => doc.data());

  const paths = foods.map((food) => ({
    params: { id: String(food.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface GetStaticPropsExtended extends GetStaticPropsContext {
  params: { id: string };
}

export const getStaticProps = async ({ params }: GetStaticPropsExtended) => {
  const foodRef = doc(db, "foods", String(params.id));
  const foodSnap = await getDoc(foodRef);
  const food = foodSnap.data() as Food;
  const reviews = food.reviews.map((review, i) => (i < 4 ? review : null));

  const relatedRef = query(
    collection(db, "foods"),
    where("category", "==", food.category),
    limit(4)
  );
  const { docs: relatedDocs } = await getDocs(relatedRef);
  const related = relatedDocs.map((doc) => doc.data());

  return {
    props: {
      food,
      related,
      reviews,
    },
    revalidate: 3600,
  };
};
