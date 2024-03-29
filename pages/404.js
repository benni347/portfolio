import NextLink from "next/link";
import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Text
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>
                The page you&apos;re trying to access doesn&apos;t exist.
            </Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/" legacyBehavior>
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFound;
