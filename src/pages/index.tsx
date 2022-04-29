import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { BannerHome } from "../components/BannerHome";

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100%"
    >
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <BannerHome/>
    </Flex>
  )
}
