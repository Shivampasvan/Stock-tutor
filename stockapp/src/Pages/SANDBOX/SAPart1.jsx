import { VStack, HStack, Text, Image, Button, Stack, Container, Box } from "@chakra-ui/react";

export default function SAPart1() {
    return (
        <div>
            <Container maxW={'10xl'} margin={'auto'} >
                <HStack flexWrap={'wrap'} margin={'auto'} justifyContent={'space-evenly'} lineHeight={'50px'}>
                    <VStack>
                        <Box maxW={'md'}>
                            <Text fontSize={'3xl'} as='b'>Automate Your Email Testing With Sandbox API
                            </Text>
                        </Box>
                        <Box>
                            <Text>Cover your code with tests and validate if emails are sent. Test multiple variables at a time.

                            </Text>
                        </Box>
                        <Box>
                            <Button color={'white'} backgroundColor={'#22D172'}>Sign Up For Free</Button>
                        </Box>

                        <Box>

                            <Stack direction={['column', 'row']} marginTop={'50px'}>
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Selenium-110x33.png" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/logo__rails.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/Python.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/logo__php.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__post.svg" />
                            </Stack>
                        </Box>

                    </VStack>
                    <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/05/img__API.svg" />
                </HStack>
            </Container>
        </div>
    )
}