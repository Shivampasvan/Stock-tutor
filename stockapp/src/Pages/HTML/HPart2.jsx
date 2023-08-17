
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



export default function HPart2() {
    return (
        <div>
            <Card width={'60%'} margin={'auto'} marginTop={'50px'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='2xl'>Everything you need to validate your HTML/CSS</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Stack direction={['column','row']}> 
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/logo-computer.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='m' textTransform='uppercase'>
                                        Verify email client support
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        See how many of your recipients will have no trouble displaying your emails.                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/comp.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Check each HTML/CSS element                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        View the list of unsupported elements and find out which email clients lack compatibility.   
                                        </Text>                                 </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Stack direction={['column','row']}>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/person-icon.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Optimize for your audience                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Enhance your emails for mobile or focus only on a particular email client, if you wish.                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            <VStack spacing='100px' >
                                <HStack>
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/comment-icon.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Find problematic lines in code
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        Jump directly to the unsupported elements in your email’s code. Fix them, resend an email and check for improvements.                                       </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Stack>
                        <Center>
                            <VStack spacing='100px' >
                                <HStack maxW={'md'} >
                                    <Box>
                                        <Image src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon-1.svg' />
                                    </Box>
                                    <Box maxW={'md'}>
                                        <Heading size='xs' textTransform='uppercase'>
                                        Preview each iteration
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                        See how each email renders on desktop, mobile and a tablet. Validate each new version without leaving your Sandbox inbox.                                     </Text>
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