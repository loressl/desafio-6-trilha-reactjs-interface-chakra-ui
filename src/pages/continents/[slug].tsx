import { Box, Flex, Heading, Stack, useBreakpointValue, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { BannerContinent } from "../../components/Banner"
import { Card } from "../../components/Card"
import { Info } from "../../components/Info"
import { api } from "../../services/api"
import { DataContinent } from "../../types"

interface ContinetProps {
    continent: DataContinent
    error: boolean
}

export default function Continent({continent, error}: ContinetProps){
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    })


    if(error) {
        return (
          <Heading>😭</Heading>
        )
    }

    return(
        <Flex
            w="100%"
            h="100%"
            flexDirection="column"
        >
            <Head>
                <title>{continent.name}</title>
            </Head>
            <BannerContinent
                bg={continent.banner}
                name={continent.name}
                isWideVersion={isWideVersion}
            />
            <Flex
                width="100%"
                h="100%"
                align="center"
                justify="center"
                flexDirection="column"
            >
                <Stack
                    direction={isWideVersion ? 'row': 'column'}
                    spacing={isWideVersion ? '70px':'16px'}
                    mb={isWideVersion ? "80px":"32px"}
                    maxW="1160px"
                    w="100%"
                >
                    <Box
                        display="flex"
                        w="100%"
                        maxW={isWideVersion ? "600px":"343px"}
                        mt={isWideVersion ? "80px" : "24px"}
                        pl={isWideVersion? "inherit":"16px"}
                        pr={isWideVersion? "inherit":"16px"}
                        mb={isWideVersion? "inherit":"16px"}
                    >
                        <Text
                            fontStyle="normal"
                            fontWeight="400"
                            textAlign="justify"
                            color="gray.600"
                            lineHeight={isWideVersion ? "36px":"21px"}
                            fontSize={isWideVersion ? '24px':'14px'}
                        >
                            {continent.description}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        maxW={isWideVersion ? "490px":"343px"}
                        alignItems="center"
                        pl={isWideVersion? "inherit":"16px"}
                        pr={isWideVersion? "inherit":"16px"}
                    >
                        <Info 
                            value={continent.numberOfCountries}
                            info="países"
                            isWideVersion={isWideVersion}
                            tooltip={false}
                        />
                        <Info 
                            value={continent.numberOfLanguages}
                            info="línguas"
                            isWideVersion={isWideVersion}
                            tooltip={false}
                        />
                        <Info 
                            value={continent.mostVisitedQuantity}
                            info="cidades+100"
                            isWideVersion={isWideVersion}
                            tooltip={true}
                        />
                    </Box>
                </Stack>
                <Flex
                    flexDirection="column"
                    maxW="1160px"
                    w="100%"
                    mb={isWideVersion ? "35px": "16px"}
                >
                    <Heading>
                        Cidades +100
                    </Heading>
                    <Wrap
                        mt={isWideVersion? "40px":"20px"}
                        spacing={isWideVersion ? "45px" : "20px"}
                        justify={ isWideVersion ? "flex-start":"center"}
                    >
                        {continent.mostPopularCities.map((city) => (
                            <WrapItem key={city.city}>
                                <Card isWideVersion={isWideVersion}/>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    let error = false
    const { slug } = params
    const response = await api.get(`/continents`, {params: { slug }})
        .then((resp) => resp.data[0]).catch(() => error = true)

    return {
        props: {
            continent: response,
            error
        },
        redirect: 60 * 30
    }
}