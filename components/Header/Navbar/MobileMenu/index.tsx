import { FC } from "react";
import Link from "next/link";
import styles from "@modules/MobileMenu.module.scss";

interface MobileMenuProps {
  state: boolean;
  handler: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ state, handler }) => {
  return (
    <div
      onClick={handler}
      className={`${styles.overlay} ${state ? styles.active : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.mobile} ${state ? styles.active : ""}`}
      >
        <ul className={styles.mobileMenu}>
          <Link onClick={handler} href={"/"}>
            <li>Home</li>
          </Link>
          <Link onClick={handler} href={"/foods"}>
            <li>Foods</li>
          </Link>
          <Link onClick={handler} href={"/cart"}>
            <li>Cart</li>
          </Link>
          <Link onClick={handler} href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
