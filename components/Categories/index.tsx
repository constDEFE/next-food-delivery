import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "components/UI/Container";
import styles from "@modules/Categories.module.scss";

const Categories: FC = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/xh4mLZz/category-01.webp"}
            width={64}
            height={64}
            alt="fast-food.webp"
            draggable={false}
          />
          <h4>Fast Food</h4>
        </Link>
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/vZ49BpS/category-02.webp"}
            width={64}
            height={64}
            alt="pizza.webp"
            draggable={false}
          />
          <h4>Pizza</h4>
        </Link>
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/dPdkJdh/category-03.webp"}
            width={64}
            height={64}
            alt="asian-food.webp"
            draggable={false}
          />
          <h4>Asian Food</h4>
        </Link>
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co/mGKb7w7/category-04.webp"}
            width={64}
            height={64}
            alt="rew-meat.webp"
            draggable={false}
          />
          <h4>Raw Meat</h4>
        </Link>
      </Container>
    </section>
  );
};

export default Categories;
