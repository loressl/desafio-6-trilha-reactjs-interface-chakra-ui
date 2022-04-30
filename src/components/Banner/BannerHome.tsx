import { 
    Box, 
    Flex, 
    Heading, 
    useBreakpointValue,
    Text,
    Image
} from "@chakra-ui/react";
import { constants } from '../../utils'

export function BannerHome () {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    })

    return(
        <Flex
            width="100%"
            height={isWideVersion? 335: 163}
            flexDirection="row"
            backgroundImage="/images/background.svg"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Box
                w={isWideVersion ? '50%': '100%'}
                display="flex"
                alignItems={isWideVersion? "center": "flex-start"}
                justifyContent="center"
                flexDirection="column"
                ml={isWideVersion ? "5px": "16px"}
            >
                <Heading
                    color="gray.100"
                    fontWeight="medium"
                    fontSize={isWideVersion ? "36px": "20px"}
                    pb="20px"
                >
                    {constants.titleBannerHome}
                </Heading>
                <Text
                    color="gray.200"
                    fontWeight="normal"
                    fontSize={isWideVersion ? "20px": "14px"}
                >
                    {constants.phraseBannerHome}
                </Text>
            </Box>
            {isWideVersion &&
                <Box
                    width='50%'
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image 
                        mt="100px"
                        width="417px"
                        height="270px"
                        src="/images/airplane.svg"
                        alt="airplane"
                        transform="rotate(3deg)"
                    />

                </Box>
            }
        </Flex>
    )
}