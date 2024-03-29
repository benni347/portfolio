import NextLink from "next/link";
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/certificates" legacyBehavior>
            <Link href="/certificates">Certificates</Link>
        </NextLink>
        <span>
            {" "}
            <ChevronRightIcon />{" "}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
);

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
);
