import { FC, ReactNode } from "react";
import styles from "@modules/Container.module.scss";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>{children}</div>
  );
};

export default Container;
