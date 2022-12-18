import { FC } from "react";
import Link from "next/link";
import Container from "components/UI/Container";
import CustomHead from "components/UI/CustomHead";
import styles from "@modules/pages/NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
  return (
    <>
      <CustomHead title="Not Found" />
      <section className={styles.section}>
        <Container className={styles.container}>
          <div>
            <h1>
              <span>Ooops... </span>
              This page cannot be found.
            </h1>
            <hr />
            <Link href={"/"}>
              Go back to the
              <span> Homepage</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
