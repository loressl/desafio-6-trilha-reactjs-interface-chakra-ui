import { Flex } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"


export default function Continent(){
    return(
        <Flex>
            <Head>
                <title>Nome</title>
            </Head>
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
    const { slug } = params
    // /continents?slug=americaCentral
    return {
        props: {
            params
        },
        redirect: 60 * 30
    }
}