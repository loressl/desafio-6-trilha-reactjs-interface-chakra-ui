import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { GoPrimitiveDot } from 'react-icons/go'

interface TypeProps {
    image: string
    title: string
    isWideVersion: boolean
}

export function Type({image, title, isWideVersion}: TypeProps) {
    return(
        <Box
            display="flex"
            width="auto"
            height={isWideVersion ?"145px": "auto"}
            flexDirection={ isWideVersion ? "column": "row"}
            alignItems="center"
        >
            {isWideVersion ? 
                (            
                    <Image
                        width="85px"
                        height="85px"
                        src={image}
                        alt={title}
                        mb="24px"
                    />
                ):
                (
                    <Icon as={GoPrimitiveDot} color="yellow.400"/>
                )
        }
            <Text
                color="gray.600"
                fontSize={ isWideVersion ? "24px": "18px"}
                fontWeight={isWideVersion ? "600":"500"}
                fontStyle="normal"
                textAlign="center"
                ml="8px"
            >
                {title}
            </Text>
        </Box>
    )
}