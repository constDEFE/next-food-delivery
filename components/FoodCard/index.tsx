import { FC } from "react";
import { Food } from "types";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addItem } from "redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";
import styles from "@modules/FoodCard.module.scss";

interface FoodCardProps {
  food: Food;
}

const FoodCard: FC<FoodCardProps> = ({ food }) => {
  const dispatch = useAppDispatch();

  const handleButton = (): void => {
    dispatch(addItem(food));
  };

  return (
    <li className={styles.container}>
      <Link href={`/food/${food.id}`}>
        <div>
          <Image
            src={food.image1}
            width={256}
            height={256}
            alt="food-image.webp"
            draggable={false}
          />
          <h4>{food.title}</h4>
        </div>
      </Link>
      <div className={styles.row}>
        <span>${food.price}</span>
        <button onClick={handleButton}>Add to Cart</button>
      </div>
    </li>
  );
};

export default FoodCard;
