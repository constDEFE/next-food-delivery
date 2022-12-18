import { FC } from "react";
import Image from "next/image";
import Container from "components/UI/Container";
import styles from "@modules/Services.module.scss";

const Services: FC = () => {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h3>What we serve</h3>
          <h2>
            Just sit back at home
            <br />
            we will
            <span> take care</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            minima.
          </p>
        </div>
        <div className={styles.row}>
          <div>
            <Image
              src={"https://i.ibb.co/0tqXDQ3/service-01.webp"}
              draggable={false}
              width={200}
              height={165}
              alt="delivery.webp"
            />
            <h4>Quick Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div>
            <Image
              src={"https://i.ibb.co/kmHXgDC/service-02.webp"}
              draggable={false}
              width={200}
              height={165}
              alt="dine-in.webp"
            />
            <h4>Super Dine In</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div>
            <Image
              src={"https://i.ibb.co/gMLmfdt/service-03.webp"}
              draggable={false}
              width={200}
              height={165}
              alt="pick-up.webp"
            />
            <h4>Easy Pick Up</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
