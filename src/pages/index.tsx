import { Flex, Divider, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { BannerHome } from '../components/Banner'
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  })

  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
    >
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <BannerHome/>
      <Flex
        width="100%"
        h="100%"
        align="center"
        justify="center"
        flexDirection="column"
      >
        <TravelTypes />
        <Divider 
          orientation="horizontal" 
          borderColor="gray.600"
          w={isWideVersion? "90px": "60px"}
          mt={isWideVersion? "80px": "35px"}
          mb={isWideVersion ? "52px":"24px"}
          border={isWideVersion? "2px": "1px"}
        />
      </Flex>
    </Flex>
  )
}
