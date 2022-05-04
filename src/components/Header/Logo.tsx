import { Image } from "@chakra-ui/react";

interface LogoProps {
    isWideVersion: boolean
}

export function Logo({isWideVersion}: LogoProps) {

    return(
        <>
            <Image
                alt="World trip"
                width={isWideVersion ? 184: 81}
                height={isWideVersion? 46: 20}
                src="/images/logo.svg"
                flex={isWideVersion ?"1":"0"}
            />
        </>
    )
}