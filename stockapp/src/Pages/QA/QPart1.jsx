import { VStack, HStack, Text, Image, Button, Stack, Container, Box } from "@chakra-ui/react";

export default function QPart1() {
    return (
        <div>
            <Container maxW={'10xl'} margin={'auto'} >
                <HStack flexWrap={'wrap'} margin={'auto'} justifyContent={'space-evenly'} lineHeight={'50px'}>
                    <VStack>
                        <Box maxW={'md'}>
                            <Text fontSize={'3xl'} as='b'>Powerful Automation For
                                Testing Your Email Sequences</Text>
                        </Box>
                        <Box>
                            <Text>Cover all your testing scenarios with Sandbox API.</Text>
                        </Box>
                        <Box>
                            <Button color={'white'} backgroundColor={'#22D172'}>Sign Up For Free</Button>
                        </Box>

                        <Box>

                            <Stack direction={['column', 'row']} marginTop={'50px'}>
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Selenium-110x33.png" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Cucumber.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Protractor.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Cypress.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/06/Jmeter.svg" />
                            </Stack>
                        </Box>

                    </VStack>
                    <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/05/img__qa.svg" />
                </HStack>
            </Container>
        </div>
    )
}