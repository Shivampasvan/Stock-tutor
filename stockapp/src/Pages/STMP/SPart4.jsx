import { Text, VStack, HStack, Image, Icon, createIcon, Box, Heading, Button } from "@chakra-ui/react"


export default function SPart4() {
    return (
        <div>
            <HStack justifyContent={'center'} flexWrap={'wrap'} marginBottom={'50px'}>
                <VStack>
                    <Heading>How QAs use Email Sandbox</Heading>
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
                                        Check any emails within your end-to-end automated test suites
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Pick any, even the most complex email sequence and include it in the corresponding test.
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
                                        Launch the tests
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Use Sandbox API to build and launch automated acceptance tests for the entire sequence.
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
                                        Verify the test results automatically
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Confirm the results automatically using the Sandbox API. Validate if email headers and content are as expected and if the sending triggers work properly. Validate subject lines, links, attachments, and others.
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
                <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/05/img__qa-how.svg" />

                </HStack>
            </HStack>
        </div>
    )
}