import { Stack, HStack, VStack, Box,Text, Button,Image, Container } from '@chakra-ui/react'

export default function SPart7(){
    return(
        <div>
            <Container bg={'#1A2E44'} maxW={'large'}>
            <HStack justifyContent={'space-evenly'} flexWrap={'wrap'} >
                <Box>
                    <Text color={'white'} fontSize={'3xl'}>Create You Free Account</Text>
                    <Text color={'white'} fontSize={'7xl'}>In 3 Clicks</Text>
                    <Button marginTop={'30px'} color={'white'} backgroundColor={'#22D172'}>Sign Up Now</Button>
                </Box>
                <Image width={'sm'}  src={'https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg'} />
            </HStack>
            </Container>
            
        </div>
    )
}