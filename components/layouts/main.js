import Head from "next/head";
import Navbar from "../navbar.js";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>C&eacute;dric&apos;s Portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr></NoSsr>
                {children}

                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
