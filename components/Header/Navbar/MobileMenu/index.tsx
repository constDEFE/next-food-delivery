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
          <li>
            <Link onClick={handler} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handler} href={"/foods"}>
              Foods
            </Link>
          </li>
          <li>
            <Link onClick={handler} href={"/cart"}>
              Cart
            </Link>
          </li>
          <li>
            <Link onClick={handler} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
