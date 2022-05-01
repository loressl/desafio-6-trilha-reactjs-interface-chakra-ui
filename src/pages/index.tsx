import { Flex, Divider, useBreakpointValue, Text, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { SwiperSlide } from "swiper/react";
import { BannerHome } from '../components/Banner'
import { Slider } from "../components/Slider";
import { SliderItem } from "../components/Slider/SliderItem";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";
import { Country } from "../types";

interface HomeProps {
  countries: Country[]
  error: boolean
}

export default function Home({countries, error}: HomeProps) {
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
        <TravelTypes isWideVersion={isWideVersion} />
        <Divider 
          orientation="horizontal" 
          borderColor="gray.600"
          w={isWideVersion? "90px": "60px"}
          mt={isWideVersion? "80px": "35px"}
          mb={isWideVersion ? "52px":"24px"}
          border={isWideVersion? "2px": "1px"}
        />
        <Text
          textAlign="center"
          fontWeight="500"
          color="gray.600"
          fontSize={ isWideVersion ? "36px":"20px"}
          lineHeight={isWideVersion ? "54px":"30px"}
          fontStyle="normal"
          mb={isWideVersion ? "52px":"20px"}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
        <Flex
          w="100%"
          maxW={isWideVersion ? "1240px":"375px"}
          h={isWideVersion ? "450px":"250px"} 
          mb="40px"
        >
          <Slider
            settings={{
              cssMode: true,
              slidesPerView: 1,
              pagination: {clickable: true},
              navigation: true,
              mousewheel:true,
              keyboard: true,
              autoplay:{delay: 3000},
              style:{width: '100%', flex: '1', height: '100%'}
            }}
          >
            {countries?.map((country) => (
              <SwiperSlide key={country.name}>
                <SliderItem 
                  name={country.name}
                  description={country.description}
                  image={country.image}
                  path={country.path}
                  isWideVersion={isWideVersion}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  let error = false
  const response = await api.get('/home')
    .then((resp) => resp.data)
    .catch(() => error = true)

  return {
    props: {
      countries: response,
      error
    }
  }
}
