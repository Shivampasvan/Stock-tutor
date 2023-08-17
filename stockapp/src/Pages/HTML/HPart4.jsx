import { Text, VStack, HStack, Image, Icon, createIcon, Box, Heading, Button } from "@chakra-ui/react"


export default function HPart4() {
    return (
        <div>
            <HStack justifyContent={'center'} flexWrap={'wrap'} marginBottom={'50px'}>
                <VStack>
                    <Heading>Check your HTML in a few simple steps</Heading>
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
                                        Integrate Email Sandbox with your app
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Copy the credentials or use the ready code available for over 20 frameworks and libraries. Trigger the first email and watch as it arrives into your Sandbox inbox.                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack spacing='100px' maxW={'md'}>
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
                                        Check the HTML
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        View the market support score for your emails. See the list of unsupported elements and find the problematic lines in the email code.
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack spacing='100px' maxW={'md'} >
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
                                        Iterate on your template
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        Fix the outlined issues and send in the new copies of your emails into your Sandbox inbox. Repeat until you’re happy with the results.


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
                    <Image width={'400px'} src="https://mailtrap.io/wp-content/uploads/2021/06/image_checker_retina-480x521.png" />

                </HStack>
            </HStack>
        </div>
    )
}