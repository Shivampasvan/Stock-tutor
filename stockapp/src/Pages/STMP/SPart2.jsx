
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
    center
} from '@chakra-ui/react';



export default function SPart2() {
    return (
        <div>
            <Card width={'60%'} margin={'auto'} marginTop={'50px'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='2xl'>Email testing challenges that ApiTest Sandbox solves</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Stack direction={['column','row']}> 
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='m' textTransform='uppercase'>
                                        Testing environment ready in 5 minutes

                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Each Email Sandbox account comes with an individual testing environment. Integrate it with your app in just a few clicks.

                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/logo-computer.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Simple UI for your fake email server
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        No experience with setting up SMTP server required. Paste the credentials into your app to capture and view the emails in Sandbox.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column','row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/logo-boxes.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Separate inboxes for each of your environments
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Create individual inboxes for different environments or review servers. Or route all emails into one inbox if you prefer.

                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/logo-email-1.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                        No real emails are sent
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Email Sandbox doesn’t connect to mail servers and captures all emails into a virtual inbox. There’s zero chance of accidentally emailing your users.
                                       </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column','row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/icon-smtp.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Use fake SMTP with any tool
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Mailtrap can be integrated with any tool that supports SMTP. Use fake SMTP credentials in external tools to test what’s sent on your behalf.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/logo-data.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Ditch maintaining your infrastructure
</Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Say farewell to downtimes, upgrades or performance monitoring. We take care of them for you with 99,9%+ uptime.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                    </Stack>
                </CardBody>

            </Card>
        </div>
    )
}