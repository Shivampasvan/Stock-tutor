
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



export default function SAPart4() {
    return (
        <div>
            <Card width={'60%'} margin={'auto'} marginTop={'50px'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='2xl'>Email testing challenges that ApiTest Sandbox solves</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Stack direction={['column', 'row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='m' textTransform='uppercase'>
                                            Verify hundreds of variables, at once

                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Complex workflows call for comprehensive solutions. Test any number of unique emails in a matter of seconds.

                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/search-icon.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Inspect unmodified emails
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Raw headers are visible for each email you send. Validate each and easily catch any inconsistencies.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column', 'row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/quickly-logo-1.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Quickly integrate with your CI

                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Our API works seamlessly with any WebCI and features an extensive documentation. There’s hardly any learning curve.

                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/schedule-icon.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Run automated, daily checks
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Save time by letting API handle the dull checks of your emails. Be the first to know if any issues occur.                                                                                 </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column', 'row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Test on any environment, including production
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            With features such as bcc tracking or individual email per inbox, you can monitor live emails with ease.
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon-1.svg' />
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Dig into the contents of your emails
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Verifying if emails are sent is just the first step. Check their spam score, validate the headers, HTML, and a lot more.
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