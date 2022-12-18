import { FC } from "react";
import Container from "../Container";
import styles from "@modules/SectionHeader.module.scss";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <Container>
        <h1>{title}</h1>
      </Container>
    </header>
  );
};

export default SectionHeader;
