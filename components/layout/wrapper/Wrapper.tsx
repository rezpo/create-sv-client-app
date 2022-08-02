import React from "react";
import styles from "./Wrapper.module.scss";
import Head from "next/head";

export interface WrapperInterface {
    title: string;
    metaProperty: string;
    metaContent: string;
    metaKey: string;
    children: React.ReactNode;
}

const Wrapper = ({
    title,
    metaProperty,
    metaContent,
    metaKey,
    children,
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
            <main className={styles.wrapper}>{children}</main>
        </>
    );
};

export default Wrapper;
