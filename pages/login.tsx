import { FC } from "react";
import { getSession, signIn } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { AiOutlineGoogle } from "react-icons/ai";
import CustomHead from "components/UI/CustomHead";
import Container from "components/UI/Container";
import styles from "@modules/pages/LoginPage.module.scss";

const LoginPage: FC = () => {
  const handleGoogleSignIn = async (): Promise<void> => {
    await signIn("google", { callbackUrl: "/account" });
  };

  return (
    <>
      <CustomHead title="Login" />
      <section className={styles.main}>
        <Container className={styles.container}>
          <div>
            <h2>Login</h2>
            <hr />
            <button onClick={handleGoogleSignIn}>
              Sign in with Google
              <AiOutlineGoogle size={28} />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/account",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
