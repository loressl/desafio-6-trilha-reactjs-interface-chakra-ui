import { 
    Box, 
    Flex, 
    Heading,
    Text,
    Image
} from "@chakra-ui/react";
import { constants } from '../../utils'

interface BannerHomeProps {
    isWideVersion: boolean
}

export function BannerHome ({isWideVersion}: BannerHomeProps) {

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
                ml={isWideVersion ? "5px": "16px"}
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    display="flex"
                    w={isWideVersion? "524px":""}
                    flexDirection="column"
                >
                    <Heading
                        color="gray.100"
                        fontWeight="medium"
                        fontSize={isWideVersion ? "36px": "20px"}
                        pb={isWideVersion ? "20px":"8px"}
                        lineHeight={isWideVersion ? "54px":"30px"}
                    >
                        {constants.titleBannerHomeFirst} <br />
                        {constants.titleBannerHomeSecond}
                    </Heading>
                    <Text
                        color="gray.200"
                        fontWeight="normal"
                        fontSize={isWideVersion ? "20px": "14px"}
                    >
                        {constants.phraseBannerHome}
                    </Text>
                </Box>
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