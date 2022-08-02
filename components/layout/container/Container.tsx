import React from "react";
import styles from "./Container.module.scss";
import brand from "@styles/Brand.module.scss";

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
                rounded && brand.borderRounded_sm
            } ${classes}`}
        >
            {children}
        </div>
    );
};

export default Container;
