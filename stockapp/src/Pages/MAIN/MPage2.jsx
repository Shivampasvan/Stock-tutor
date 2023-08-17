import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    HStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Card,
    CardBody,
    Divider,
    CardFooter,
    ButtonGroup
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function MPage2() {
    return (
        <Container maxW={'3xl'}>
            <SimpleGrid spacing={'10'} columns={{ base: 1, lg: 2, sm: 1 }} >
                <Card maxW='md'>
                    <CardBody>
                        <Image
                            src='https://assets.mailtrap.io/packs/assets/media/sandbox-inactive-74f82ada44702b76a860.svg'
                            alt='Green double couch with wooden legs'
                        //   borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <HStack spacing={20}>
                                <VStack>
                                    <Heading size='md'>Sandbox</Heading>
                                    <Text>
                                        Test Emails on Staging
                                    </Text>
                                </VStack>
                                <Button>Set Up Inbox</Button>
                            </HStack>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Fake STMP Server
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Capture STMP traffic from Staging and dev environments.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                QA Automation
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Cover all your testing scenarios with Mailtrap’s well-documented API.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Preview and validate HTML/CSS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        View messages, check spam scores, validate headers. Check the HTML & CSS support for top email clients.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Inbox email address
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Dedicated email address for each of your Inboxes to send messages from other email accounts or from your application.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Image src='https://assets.mailtrap.io/packs/assets/app/how-sandbox-works-1dac52185a6057768149.svg' />
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardBody>
                        <Image
                            src='https://assets.mailtrap.io/packs/assets/media/sandbox-inactive-74f82ada44702b76a860.svg'
                            alt='Green double couch with wooden legs'
                        //   borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <HStack spacing={20}>
                                <VStack>
                                    <Heading size='md'>Sandbox</Heading>
                                    <Text>
                                        Test Emails on Staging
                                    </Text>
                                </VStack>
                                <Button>Set Up Inbox</Button>
                            </HStack>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Fake STMP Server
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Capture STMP traffic from Staging and dev environments.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                QA Automation
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Cover all your testing scenarios with Mailtrap’s well-documented API.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Preview and validate HTML/CSS
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        View messages, check spam scores, validate headers. Check the HTML & CSS support for top email clients.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Inbox email address
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Dedicated email address for each of your Inboxes to send messages from other email accounts or from your application.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Image src='https://assets.mailtrap.io/packs/assets/app/how-sandbox-works-1dac52185a6057768149.svg' />
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Container>
    );
}
