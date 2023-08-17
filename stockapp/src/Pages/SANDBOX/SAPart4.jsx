import { Text, VStack, HStack, Image, Icon, createIcon, Box, Heading, Button } from "@chakra-ui/react"


export default function SAPart4() {
    return (
        <div>
            <HStack justifyContent={'center'} flexWrap={'wrap'} marginBottom={'50px'}>
                <VStack>
                    <Heading>How devs use Sandbox API
</Heading>
                    <VStack>
                        <VStack spacing='100px' maxW={'md'} marginTop={'30px'} >
                            <HStack>
                                <Box>
                                    <Icon viewBox='0 0 200 200' color='green'>
                                        <path
                                            fill='currentColor'
                                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                        />
                                    </Icon>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                    Integrate your app with Mailtrap SMTP and API
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                    Copy the credentials or grab the ready code available in the inbox settings. Send the first email to Sandbox SMTP server.
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack spacing='100px'  maxW={'md'}>
                            <HStack>
                                <Box>
                                    <Icon viewBox='0 0 200 200' color='green'>
                                        <path
                                            fill='currentColor'
                                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                        />
                                    </Icon>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                    Run a check in your CI
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                    Use API to validate if an email was indeed sent. Check automatically any other details – headers, attachments, links, etc.
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack spacing='100px'maxW={'md'} >
                            <HStack>
                                <Box>
                                    <Icon viewBox='0 0 200 200' color='green'>
                                        <path
                                            fill='currentColor'
                                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                        />
                                    </Icon>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                    Expand your tests
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                    Set up recurring checks and use API to access other Sandbox features – spam score, HTML check, bcc tracking, and more.
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack>
                            <Button color={'white'} backgroundColor={'#1A2E44'}>
                                Sign Up For Free
                            </Button>
                        </VStack>
                    </VStack>
                </VStack>
                <HStack>
                <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/05/img__engineers.svg" />

                </HStack>
            </HStack>
        </div>
    )
}