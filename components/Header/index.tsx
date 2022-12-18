import { FC } from "react";
import Container from "components/UI/Container";
import Logo from "components/Header/Logo";
import Navbar from "./Navbar";
import styles from "@modules/Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
