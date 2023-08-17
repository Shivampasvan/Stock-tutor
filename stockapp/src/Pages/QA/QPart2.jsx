
import {
    Card,
    HStack,
    CardHeader, StackDivider,
    CardBody,
    CardFooter,
    AspectRatio,
    Image,
    Grid,
    GridItem,
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    VStack,
    center,
    Center
} from '@chakra-ui/react';



export default function QPart2() {
    return (
        <div>
            <Card width={'60%'} margin={'auto'} marginTop={'50px'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='2xl'>Email testing essentials available with Sandbox API</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Stack direction={['column','row']}> 
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='m' textTransform='uppercase'>
                                        Integrate with your favorite environment
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Sandbox Fake SMTP works seamlessly with Selenium, Cucumber, Protractor, and many other testing tools.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Verify multiple variables at a time
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Testing if emails are sent and delivered is just the first step. Automatically verify email headers, subject, body, attachments, and more.                                       </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column','row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Make use of well-documented API
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Comprehensive documentation is available for each feature. There’s no learning curve and you’ll launch the first tests within minutes.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Test complex sequences with ease                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Write tests covering simple and complex scenarios. Test any email-related functionality effortlessly.                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Center>
                            <VStack spacing='100px' >
                                <HStack maxW={'md'} >
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Easily share test emails with your team
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Center>
                    </Stack>
                </CardBody>

            </Card>
        </div>
    )
}