import React from "react";
import styles from "./Container.module.scss";

export interface ContainerInterface {
    children: React.ReactNode;
    rounded: boolean;
    classes: string | React.CSSProperties;
}

const Container = ({
    children,
    rounded,
    classes,
}: Partial<ContainerInterface>) => {
    return (
        <div
            className={`${styles.container} ${
                rounded && styles.container_rounded
            } ${classes}`}
        >
            {children}
        </div>
    );
};

export default Container;
