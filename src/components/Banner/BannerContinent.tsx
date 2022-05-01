import { Flex, Text } from "@chakra-ui/react";

interface BannerContinentProps {
    bg: string
    name: string
    isWideVersion: boolean
}

export function BannerContinent ({bg, name, isWideVersion}:BannerContinentProps) {
    return(
        <Flex
            width="100%"
            height={isWideVersion ? "500px": "150px"}
            backgroundImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.438), rgba(28, 20, 1, 0.418)), url(${bg})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify={isWideVersion? "inherit": "center"}
            align={isWideVersion? "inherit": "center"}
            backgroundPosition="center"
        >
            <Text
                color="gray.100"
                fontSize={isWideVersion? "48px":"28px"}
                fontWeight="600"
                fontStyle="normal"
                position={isWideVersion ? "absolute":"inherit"}
                bottom="59px"
                left="140px"
            >
                {name}
            </Text>
        </Flex>
    )
}