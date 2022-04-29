import { Image, useBreakpointValue } from "@chakra-ui/react";

export function Logo() {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
    })

    return(
        <>
            <Image
                alt="World trip"
                width={isWideVersion ? 184: 81}
                height={isWideVersion? 46: 20}
                src="/images/logo.svg"
            />
        </>
    )
}