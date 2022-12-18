import { FC } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Container from "components/UI/Container";
import Image from "next/image";
import styles from "@modules/WhyUs.module.scss";

const WhyUs: FC = () => {
  return (
    <section>
      <Container className={styles.container}>
        <Image
          src={"https://i.ibb.co/xDzkWFY/location.webp"}
          width={2000}
          height={2000}
          draggable={false}
          alt="why-us.webp"
          priority
        />
        <div>
          <h2>
            Why
            <span> Tasty Treat?</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eaque
            totam, voluptates molestiae cum sequi iste ad ipsa omnis sit itaque.
            Similique doloribus dolore consequuntur nobis sint vero, dolorem ab?
          </p>
          <ul>
            <li>
              <div className={styles.heading}>
                <AiOutlineCheckCircle size={16} />
                <h4>Fresh and tasty foods</h4>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, neque!
              </p>
            </li>
            <li>
              <div className={styles.heading}>
                <AiOutlineCheckCircle size={16} />
                <h4>Quality support</h4>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, neque!
              </p>
            </li>
            <li>
              <div className={styles.heading}>
                <AiOutlineCheckCircle size={16} />
                <h4>Order from any location</h4>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, neque!
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
