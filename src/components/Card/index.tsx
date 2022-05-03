import { Flex } from "@chakra-ui/react";

interface CardProps {
    isWideVersion: boolean
}

export function Card({isWideVersion}: CardProps){
    return (
        <Flex
            w="256px"
            h="279px"
            border="1px"
            borderColor="yellow.350"
            borderRadius="4px"
            bg="gray.50"
            flexDirection="column"
        >
            card
        </Flex>
    )
}