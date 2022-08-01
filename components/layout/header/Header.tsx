import React from "react";
import styles from "./Header.module.scss";

export interface HeaderInterface {
    children?: React.ReactNode;
}

const Header = ({ children }: HeaderInterface) => {
    return <div className={styles.header}>{children}</div>;
};

export default Header;
