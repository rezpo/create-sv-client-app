import Wrapper from "../../components/layout/wrapper/Wrapper";
import Container from "../../components/layout/container/Container";
import Title from "../../components/typography/title/Title";
import Body from "../../components/typography/body/Body";
import Button from "../../components/interactive/button/Button";
import styles from "./Home.module.scss";
// import { getUsers } from "@api/request";
// import { status } from "@api/middleware";

const Home = () => {
    // const [loading, setLoading] = useState(false);
    // const [result, setResult] = useState({});

    // const handleClick = async () => {
    //     const { data } = await getUsers();
    //     setLoading(status.calling);
    //     setResult(data ? data : {});
    // };

    return (
        <Wrapper
            title="Home page"
            metaProperty="description"
            metaContent="Reprehenderit sit elit irure laboris dolore sit nulla in cillum elit."
            metaKey="home-page"
            classes={styles.container}
            dataTestId="home-page"
        >
            <Title type="h1" text="Hey, let's get started!" />
            <Container rounded classes={styles.textBox}>
                <Title type="h2" text="This is an awesome boilerplate" />
                <Body
                    type="p"
                    text="You will find all the components that you need to build your application. This boilerplate is based on Next.js and uses TypeScript, it's also optimized for SEO and it's easy to use."
                />
                <Body
                    type="p"
                    text="Checkout each component running yarn storybook or using the code editor. You can also check the source code of each component in the repository."
                />
                <Body type="strong" text="Have fun and enjoy the project! ✌🏼" />
                <div className={styles.interactiveBox}>
                    <Button
                        type="button"
                        text="Ad cillum"
                        variant="contained"
                        color="secondary"
                        size="medium"
                    />
                    <Button
                        type="button"
                        text="Quis dolore"
                        variant="contained"
                        color="primary"
                        size="medium"
                    />
                </div>
            </Container>
        </Wrapper>
    );
};

export default Home;
