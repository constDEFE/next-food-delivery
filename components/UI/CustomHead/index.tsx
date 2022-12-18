import { FC } from "react";
import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead: FC<CustomHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Food Ordering App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
