import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps {
    name: string
    description: string
    image: string
    path: string
    isWideVersion: boolean
}

export function SliderItem ({name, description, image, path, isWideVersion}: SliderItemProps) {
    return(
        <Flex
            width="100%"
            height="100%"
            bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${image})`}
            backgroundRepeat="no-repeat"
            bgPosition="center"
            backgroundSize="cover"
            align="center"
            justify="center"
            flexDirection="column"
        >
            <Box
                display="flex"
                w={isWideVersion ? "80%": "187px"}
                justifyContent="center"
            >
                <Link href={`/continents/${path}`} passHref>
                    <a>
                        <Heading
                            color="gray.100"
                            fontSize={isWideVersion? "48px":"24px"}
                            textAlign="center"
                            fontWeight="700"
                            fontStyle="normal"
                        >
                            {name}
                        </Heading>
                        <Text
                            textAlign="center"
                            color="gray.50"
                            fontSize={isWideVersion? "24px":"14px"}
                            fontWeight="700"
                        >
                            {description}
                        </Text>
                    </a>
                </Link>
            </Box>
        </Flex>

    )
}