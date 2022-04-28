import { Flex, useBreakpointValue  } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

export function Header () {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { asPath } = useRouter()

    console.log(asPath)
    //TODO: COLOCAR BOTÃO DE VOLTAR
    return (
        <Flex 
            as="header"
            w="100%"
            h={isWideVersion? 100: 50}
            align="center"
            justify="center"
        >
            
            <Logo />
        </Flex>
    )
}