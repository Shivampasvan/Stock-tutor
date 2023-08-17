import { VStack, HStack, Text, Image, Button, Stack, Container, Box } from "@chakra-ui/react";

export default function SPart1() {
    return (
        <div>
            <Container maxW={'10xl'} margin={'auto'} >
                <HStack flexWrap={'wrap'} margin={'auto'} justifyContent={'space-evenly'} lineHeight={'50px'}>
                    <VStack>
                        <Box maxW={'md'}>
                            <Text fontSize={'3xl'} as='b'>Safe Email Testing With Fake SMTP Server</Text>
                        </Box>
                        <Box maxW={'md'} >
                            <Text>Test emails safely, with 5-minute setup, zero maintenance, and no risk of spamming recipients’ inboxes

</Text>
                        </Box>
                        <Box>
                            <Button color={'white'} backgroundColor={'#22D172'}>Sign Up For Free</Button>
                        </Box>

                        <Box>

                            <Stack direction={['column', 'row']} marginTop={'50px'}>
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/logo__rails.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__java.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/logo__net.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/Python.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/logo__php.svg" />
                            </Stack>
                        </Box>

                    </VStack>
                    <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/05/img__safe.svg" />
                </HStack>
            </Container>
        </div>
    )
}