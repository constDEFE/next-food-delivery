import { FC, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import styles from "@modules/Navbar.module.scss";

const Navbar: FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  const cartQuantity = useAppSelector((state) => state.cartReducer.totalQuantity);

  const handleMobile = (): void => setMobile(!mobile);
  const handleCart = (): void => setCart(!cart);

  return (
    <>
      <nav className={styles.navbar}>
        <div />
        <ul className={styles.menu}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/foods"}>
            <li>Foods</li>
          </Link>
          <Link href={"/cart"}>
            <li>Cart</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className={styles.buttons}>
          <button onClick={handleCart}>
            <RiShoppingBasket2Line size={28} />
            <span className={styles.amount}>{cartQuantity}</span>
          </button>
          <button>
            <Link href={"/account"}>
              <AiOutlineUser size={28} />
            </Link>
          </button>
          <button onClick={handleMobile}>
            <FiMenu size={28} />
          </button>
        </div>
      </nav>
      <Cart handler={handleCart} state={cart} />
      <MobileMenu handler={handleMobile} state={mobile} />
    </>
  );
};

export default Navbar;
