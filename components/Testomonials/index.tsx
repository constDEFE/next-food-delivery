import { FC } from "react";
import { Testimonial } from "types";
import Image from "next/image";
import Container from "components/UI/Container";
import TestimonialSlider from "components/TestimonialSlider";
import styles from "@modules/Testimonials.module.scss";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section>
      <Container className={styles.container}>
        <div>
          <h3>Testimonials</h3>
          <h2>
            What our
            <span> customers </span>
            are saying
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            architecto voluptatum sint consectetur. Eveniet veniam fugit
            possimus nostrum, dicta rerum.
          </p>
          <TestimonialSlider testimonials={testimonials} />
        </div>
        <Image
          src={"https://i.ibb.co/bBzVdNy/network.webp"}
          width={2000}
          height={2000}
          draggable={false}
          alt="network.webp"
          priority
        />
      </Container>
    </section>
  );
};

export default Testimonials;
