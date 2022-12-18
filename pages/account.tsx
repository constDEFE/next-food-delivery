import { FC } from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Container from "components/UI/Container";
import CustomHead from "components/UI/CustomHead";
import styles from "@modules/pages/AccountPage.module.scss";

interface AccounPageProps {
  session: Session;
}

const AccounPage: FC<AccounPageProps> = ({ session }) => {
  const { status } = useSession();

  return (
    <>
      <CustomHead title="Account" />
      <section className={styles.section}>
        <Container className={styles.container}>
          {status === "authenticated" ? (
            <div>
              <h1>Welcome</h1>
              <div className={styles.userCard}>
                <div>
                  <Image
                    src={session.user?.image || ""}
                    width={64}
                    height={64}
                    alt="avatar.webp"
                    draggable={false}
                  />
                  <div>
                    <h4>{session.user?.name}</h4>
                    <p>{session.user?.email}</p>
                  </div>
                </div>
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </Container>
      </section>
    </>
  );
};

export default AccounPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
