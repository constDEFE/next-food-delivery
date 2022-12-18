import Image from "next/image";
import { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { removeItem } from "redux/slices/cartSlice";
import Container from "components/UI/Container";
import CustomHead from "components/UI/CustomHead";
import SectionHeader from "components/UI/SectionHeader";
import Link from "next/link";
import styles from "@modules/pages/CartPage.module.scss";

const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useAppSelector((state) => state.cartReducer.totalPrice);

  const handleDeleteButton = (id: number): void => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <CustomHead title="Cart" />
      <SectionHeader title="Your Cart" />
      <section className={styles.section}>
        <Container className={styles.container}>
          {cartItems.length ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Image
                          src={item.image1}
                          width={64}
                          height={64}
                          alt="image.webp"
                        />
                      </td>
                      <td>
                        <p>{item.title}</p>
                      </td>
                      <td>
                        <p>${item.price}</p>
                      </td>
                      <td>
                        <p>{item.quantity}pcs</p>
                      </td>
                      <td>
                        <button onClick={() => handleDeleteButton(item.id)}>
                          <FiTrash2 size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <h4>
                  Subtotal:
                  <span> ${totalPrice}</span>
                </h4>
                <p>Taxes and shipping will be calculated at checkout</p>
                <div className={styles.buttons}>
                  <button>
                    <Link href={"/foods"}>Continue Shopping</Link>
                  </button>
                  <button>
                    <Link href={"/checkout"}>Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.noItems}>
                <div>
                  <h2>Your cart is empty</h2>
                  <hr />
                  <Link href={"/foods"}>Continue Shopping</Link>
                </div>
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default CartPage;
