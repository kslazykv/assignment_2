import { FC } from "react";
import { Container, Flex, Text, Switch, FormControl, FormLabel, useBreakpointValue } from "@chakra-ui/react"

const data = [
    {
        title:'Remove background for uploaded person images',
        subtitle:'Automatically remove the background of images that are uploaded to a specific Person. This could increase the quality of the detected hits.',
    },
    {
        title:'Enable person functionality',
        subtitle:'Enables face detection, person search & other related funcionality.',
    },
    {
        title:'Enable audio functionality',
        subtitle:'Enables audio upload & other related functionality.',
    },
    {
        title:'Enable file functionality',
        subtitle:'Enables file upload & other related funcionality.',
    },
    {
        title:'Enable label functionality',
        subtitle:'Enables label detection & other related funcionality.',
    },
    {
        title:'Enable tag functionality',
        subtitle:'Enables automatic tagging of IPTC tags when ingesting video & images.',
    },
]

export const SettingsList:FC = () => {
    const showAllLines = useBreakpointValue({ base: true, md: false });
    return(
        <Container 
            maxW='container.xl'
        >
            {data.map((item, index)=>(
                <FormControl
                    key={index}
                    display='flex' 
                    alignItems='center'
                    m={0}
                    p={0}
                >
                    <FormLabel  
                        w='100%' 
                        py={1} 
                        bgColor='#131722'  
                        m={0}
                        cursor='pointer' px={2}
                        sx={{
                            _hover:{'.hoverEffect':{
                                opacity:1 
                            }}
                        }}
                    >
                        <Flex
                            pl={2} 
                            pr={5} 
                            py={1}
                            borderRadius='sm'
                            fontWeight='300'
                            bgColor='#21262c'
                            flexDir='row' 
                            w='100%'
                            justifyContent='space-between' 
                            alignItems='center'
                        >  
                            <Text 
                                color='white'
                                opacity={0.8}
                                noOfLines={showAllLines?5:1}
                                className='hoverEffect'
                            > 
                                {item.title}
                            </Text>
                            <Switch/>
                            </Flex>
                        <Text 
                            pl={3} 
                            pr={5} 
                            py={1}
                            fontSize='sm'
                            color='white'
                            opacity={0.8}
                            fontWeight='300'
                            noOfLines={showAllLines?5:1}
                            className='hoverEffect'
                        > 
                            {item.subtitle}
                        </Text>
                    </FormLabel>
                </FormControl>
            ))}
        </Container>
    )
}