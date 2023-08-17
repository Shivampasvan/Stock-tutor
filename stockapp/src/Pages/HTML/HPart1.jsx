import { VStack, HStack, Text, Image, Button, Stack, Container, Box } from "@chakra-ui/react";

export default function HPart1() {
    return (
        <div>
            <Container maxW={'10xl'} margin={'auto'} >
                <HStack flexWrap={'wrap'} margin={'auto'} justifyContent={'space-evenly'} lineHeight={'50px'}>
                    <VStack>
                        <Box maxW={'md'}>
                            <Text fontSize={'3xl'} as='b'>Check The HTML & CSS Support For Top Email Clients
                                </Text>
                        </Box>
                        <Box>
                            <Text>See how Gmail, Outlook, Apple Mail, and others will treat your emails. Fix the issues right away.</Text>
                        </Box>
                        <Box>
                            <Button color={'white'} backgroundColor={'#22D172'}>Sign Up For Free</Button>
                        </Box>

                        <Box>

                            <Stack direction={['column', 'row']} marginTop={'50px'}>
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__gmail.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__apple-mail.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__yahoo-mail.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__outlook.svg" />
                                <Image src="https://mailtrap.io/wp-content/uploads/2021/05/logo__thunderbird.svg" />
                            </Stack>
                        </Box>

                    </VStack>
                    <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/06/html_check_main_image.png" />
                </HStack>
            </Container>
        </div>
    )
}