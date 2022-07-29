import styles from "./Wrapper.module.scss";

export interface WrapperInterface {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperInterface> = ({ children }) => {
    return <main className={styles.wrapper}>{children}</main>;
};

export default Wrapper;
