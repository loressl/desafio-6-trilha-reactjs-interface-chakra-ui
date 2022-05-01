import { Flex, Icon, IconButton, useBreakpointValue, Link as ChakraLink  } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo";
import { FaChevronLeft } from 'react-icons/fa'

export function Header () {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    })

    const { asPath } = useRouter()
    const isHome = asPath === "/"

    return (
        <Flex 
            as="header"
            w="100%"
            h={isWideVersion? 100: 50}
            align="center"
            justify={isWideVersion ? "inherit": "center"}
        >
            {!isHome && 
                <Link href="/">
                    <ChakraLink position="absolute" left={["16px","40px"]}>
                        <Icon as={FaChevronLeft} size={isWideVersion? "32px": "16px"}/>
                    </ChakraLink>
                </Link>
            }
            <Logo isWideVersion={isWideVersion}/>
        </Flex>
    )
}