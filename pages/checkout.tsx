import { FC, useRef, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import Container from "components/UI/Container";
import CustomHead from "components/UI/CustomHead";
import SectionHeader from "components/UI/SectionHeader";
import styles from "@modules/pages/CheckoutPage.module.scss";

const CheckoutPage: FC = () => {
  const [shipping] = useState<number>(30);
  const cartPrice = useAppSelector((state) => state.cartReducer.totalPrice);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      nameRef.current &&
      emailRef.current &&
      phoneRef.current &&
      countryRef.current &&
      cityRef.current &&
      postalRef.current
    ) {
      alert(`
        Name: ${nameRef.current.value}\n
        Email: ${emailRef.current.value}\n
        Phone: ${phoneRef.current.value}\n
        Country: ${countryRef.current.value}\n
        City: ${cityRef.current.value}\n
        Postal Code: ${postalRef.current.value}\n
        Total: $${cartPrice + shipping}
      `);
    }
  };

  return (
    <>
      <CustomHead title="Checkout" />
      <SectionHeader title="Checkout" />
      <section>
        <Container className={styles.container}>
          <form onSubmit={handleSubmit}>
            <h4>Shipping Address</h4>
            <div>
              <input
                ref={nameRef}
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              <input
                ref={emailRef}
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <input
                ref={phoneRef}
                name="phone"
                id="phone"
                type="tel"
                placeholder="Phone Number"
              />
              <input
                ref={countryRef}
                name="country"
                id="country"
                type="text"
                placeholder="Country"
              />
              <input
                ref={cityRef}
                name="city"
                id="city"
                type="text"
                placeholder="City"
              />
              <input
                ref={postalRef}
                name="postal"
                id="postal"
                type="text"
                placeholder="Postal Code"
              />
              <button type="submit">Payment</button>
            </div>
          </form>
          <div className={styles.right}>
            <div className={styles.row}>
              <h5>Subtotal:</h5>
              <span>${cartPrice}</span>
            </div>
            <div className={styles.row}>
              <h5>Shipping:</h5>
              <span>${shipping}</span>
            </div>
            <hr />
            <div className={styles.row}>
              <h4>Total:</h4>
              <span>${cartPrice + shipping}</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckoutPage;
