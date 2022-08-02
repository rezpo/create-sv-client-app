import type { NextPage } from "next";
import Wrapper from "@components/layout/wrapper/Wrapper";
import Title from "@components/typography/title/Title";
import Body from "@components/typography/body/Body";
import Button from "@components/interactive/button/Button";
import style from "@styles/Home.module.scss";

const Home: NextPage = () => {
    // const [loading, setLoading] = React.useState(false);
    // const [result, setResult] = React.useState({});

    // React.useEffect(() => {
    //     (async () => {
    //         const { loading, data } = await getUsers();
    //         setLoading(loading);
    //         setResult(data ? data : {});
    //     })();
    // }, []);

    // console.log(loading, result);

    return (
        <>
            <Wrapper
                title="Home page"
                metaProperty="description"
                metaContent="Reprehenderit sit elit irure laboris dolore sit nulla in cillum elit."
                metaKey="home-page"
            >
                <Title type="h1" text="Home page" />
                <Body
                    type="p"
                    text="Deserunt quis do excepteur Lorem quis velit tempor qui anim cillum pariatur ipsum. Veniam mollit ex mollit labore commodo nulla Lorem mollit do. Proident excepteur nisi proident commodo qui cillum ut adipisicing cillum officia. Amet commodo cillum est deserunt sint in ex eiusmod anim aute. Incididunt enim in enim fugiat eu dolor. Occaecat consequat culpa eiusmod anim. Dolore tempor officia nisi ut aliquip dolor exercitation aliqua et ipsum."
                />
                <Button
                    type="button"
                    text="No"
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={false}
                />
                <Button
                    type="button"
                    text="No"
                    variant="outlined"
                    color="primary"
                    size="small"
                    disabled={false}
                />
            </Wrapper>

            <footer></footer>
        </>
    );
};

export default Home;
