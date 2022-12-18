import { FC } from "react";
import { Testimonial } from "types";
import Image from "next/image";
import Slider from "react-slick";
import styles from "@modules/TestimonialSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ testimonials }) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider className={styles.slider} {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <blockquote>{`"${testimonial.content}"`}</blockquote>
          <div className={styles.row}>
            <Image
              src={testimonial.image}
              width={100}
              height={150}
              alt="avatar.webp"
            />
            <p>{testimonial.author}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
