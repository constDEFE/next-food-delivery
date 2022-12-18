import { FC, useEffect } from "react";
import { Food } from "types";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import {
  addItem,
  deleteItem,
  removeItem,
  setState,
} from "redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { getCachedCartState } from "utils";
import styles from "@modules/Cart.module.scss";

interface CartProps {
  state: boolean;
  handler: () => void;
}

const Cart: FC<CartProps> = ({ state, handler }) => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const cartPrice = useAppSelector((state) => state.cartReducer.totalPrice);
  const dispatch = useAppDispatch();

  const handleIncrement = (item: Food): void => {
    dispatch(addItem(item));
  };

  const handleDecrement = (id: number): void => {
    dispatch(removeItem(id));
  };

  const handleDelete = (id: number): void => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    dispatch(setState(getCachedCartState()));
  }, []);

  return (
    <div
      onClick={handler}
      className={`${styles.overlay} ${state ? styles.active : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.cart} ${state ? styles.active : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <button onClick={handler}>
              <IoIosCloseCircle size={38} />
            </button>
            <ul>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <Image
                        src={item.image1}
                        width={64}
                        height={64}
                        alt="image.webp"
                      />
                      <div>
                        <h4>{item.title}</h4>
                        <p>
                          {item.quantity}x<span>${item.totalPrice}</span>
                        </p>
                        <div className={styles.buttons}>
                          <button onClick={() => handleIncrement(item)}>
                            <HiPlus size={20} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleDecrement(item.id)}>
                            <HiMinus size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(item.id)}>
                      <IoMdClose size={24} />
                    </button>
                  </li>
                ))
              ) : (
                <h3>Your cart is empty</h3>
              )}
            </ul>
          </div>
          <div className={styles.row}>
            {cartItems.length ? (
              <>
                <p>
                  Subtotal: <span>${cartPrice}</span>
                </p>
                <Link href={"/checkout"}>
                  <button onClick={handler}>Checkout</button>
                </Link>
              </>
            ) : (
              <Link href={"/foods"}>
                <button onClick={handler}>Continue Shopping</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
