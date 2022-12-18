import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { BiCar } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import Container from "components/UI/Container";
import styles from "@modules/Hero.module.scss";

const Hero: FC = () => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.left}>
          <h4>Easy way to make an order</h4>
          <h1>
            <span>HUNGRY? </span>
            Just wait
            <br />
            food at
            <span> your door</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            maxime placeat vitae nostrum veniam. Eveniet!
          </p>
          <div className={styles.buttons}>
            <Link href={"/cart"}>
              <button>
                Order now <FaChevronRight size={12} />
              </button>
            </Link>
            <Link href={"/foods"}>
              <button>See all foods</button>
            </Link>
          </div>
          <div className={styles.lastRow}>
            <div>
              <span className={styles.icon}>
                <BiCar size={16} />
              </span>
              <p>No shipping charge</p>
            </div>
            <div>
              <span className={styles.icon}>
                <RiShieldCheckLine size={16} />
              </span>
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
        <Image
          src={"https://i.ibb.co/Y0YSfBG/hero.webp"}
          width={2000}
          height={2000}
          alt="hero.webp"
          draggable={false}
          priority
        />
      </Container>
    </section>
  );
};

export default Hero;
