import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@modules/Logo.module.scss";

const index: FC = () => {
  return (
    <Link href={"/"}>
      <div className={styles.container}>
        <Image
          src={"https://i.ibb.co/FBYXxN6/res-logo.webp"}
          width={128}
          height={128}
          alt="logo.webp"
          className={styles.logo}
          draggable={false}
        />
        <h5>Tasty Treat</h5>
      </div>
    </Link>
  );
};

export default index;
