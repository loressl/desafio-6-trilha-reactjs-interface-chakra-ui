import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { BannerContinent } from "../../components/Banner"
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