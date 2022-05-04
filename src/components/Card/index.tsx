import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from 'react-country-flag'

interface CardProps {
    capital: string
    city: string
    initials: string
    image: string
    isWideVersion: boolean
}

export function Card({initials, city, capital, image, isWideVersion}: CardProps){
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
            <Image  
                src={image}
                h="173px"
                borderTopRadius="4px"
                objectFit='cover'
                alt={city}
            />
            <Flex
                width="100%"
                h="100%"
                p={6}
                align="center"
                justify="space-between"
                maxH={106}
            >
                <Flex
                    flexDirection="column"
                >
                    <Heading
                        fontSize="20px"
                        fontWeight="600"
                        fontStyle="normal"
                        color="gray.600"
                        mb="12px"
                        fontFamily="Barlow"
                    >
                        {city}
                    </Heading>
                    <Text
                        fontWeight="500"
                        fontSize="16px"
                        color="gray.500"
                        fontFamily="Barlow"
                    >
                        {capital}
                    </Text>
                </Flex>
                <Box
                    
                >
                    <ReactCountryFlag
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        aria-label={city}
                        countryCode={initials}
                        svg 
                    />
                </Box>
            </Flex>
        </Flex>
    )
}