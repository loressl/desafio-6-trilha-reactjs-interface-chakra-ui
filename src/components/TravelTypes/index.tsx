import { 
    Wrap, 
    WrapItem,
    Grid,
    GridItem,
    Flex 
} from "@chakra-ui/react";
import { Type } from "./Types";

interface TravelTypesProps {
    isWideVersion: boolean
}

const data = [
    { image: '/images/travelTypes/cocktail.svg', title: 'vida noturna' },
    { image: '/images/travelTypes/surf.svg', title: 'praia' },
    { image: '/images/travelTypes/building.svg', title: 'moderno' },
    { image: '/images/travelTypes/museum.svg', title: 'clássico' },
    { image: '/images/travelTypes/earth.svg', title: 'e mais...' },
]

export function TravelTypes ({ isWideVersion }: TravelTypesProps) {

    if (isWideVersion) {
        return(
            <Flex
                width="100%"
                maxW="1160px"
                height="145px"
                mt="114px"
                justify="center"
            >
                <Grid templateColumns='repeat(5, 1fr)' gap={10}>
                    {data.map((item) => (
                        <GridItem key={item.title}>
                            <Type image={item.image} title={item.title} isWideVersion={isWideVersion}/>
                        </GridItem>
                    ))}
    
                </Grid>
            </Flex>
        )
    }

    return (
        <Wrap
            width="100%"
            maxW="275px"
            mt="36px"
            justify="space-around"
            flexDirection="row"
            spacing="30px"
        >
            {data.map((item) => (
                <WrapItem key={item.title}>
                    <Type image={item.image} title={item.title} isWideVersion={isWideVersion}/>
                </WrapItem>
            ))}
        </Wrap>
    )
}