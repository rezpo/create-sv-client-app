import React from "react";
import styles from "./Wrapper.module.scss";
import Head from "next/head";

export interface WrapperInterface {
    title: string;
    metaProperty: string;
    metaContent: string;
    metaKey: string;
    children: React.ReactNode;
    classes: string;
    dataTestId?: string;
}

const Wrapper = ({
    title,
    metaProperty,
    metaContent,
    metaKey,
    children,
    classes,
    dataTestId = "wrapper",
}: Partial<WrapperInterface>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    property={metaProperty}
                    content={metaContent}
                    key={metaKey}
                />
            </Head>
            <main
                data-testid={dataTestId}
                className={`${styles.wrapper} ${classes}`}
            >
                {children}
            </main>
        </>
    );
};

export default Wrapper;
