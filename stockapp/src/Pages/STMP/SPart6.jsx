import { Center, Heading, HStack, Stack, VStack, Image, Text, Button } from "@chakra-ui/react";

export default function SPart6() {
    return (
        <div>
            <Heading marginTop={'100px'} marginBottom={'50px'}>
                <Center>Email testing toolset available with Email Sandbox</Center>
            </Heading>
            {/* <Stack direction={['row','column']} > */}
            <Stack maxW={'4xl'} direction={{ base: 'column', lg: 'row', xl: 'row' }} margin={'auto'} spacing={30}>
                <VStack maxW={'xl'}>
                    <Image src={'https://mailtrap.io/wp-content/uploads/2021/01/html-checkef.svg'} />
                    <Text as={'b'}>HTML CHECK</Text>
                    <Text>Validate the HTML/CSS rules included in your emails template. Gauge the support across popular clients – on web, mobile, and desktop.</Text>
                    <Button variant={'outline'} backgroundColor={'white'}>Learn More</Button>
                </VStack>
                <VStack maxW={'xl'}>
                    <Image src={'https://mailtrap.io/wp-content/uploads/2021/01/mailtrap-logo.svg'} />
                    <Text as={'b'}>Sandbox API CHECK</Text>
                    <Text>Cover your code with automated tests and validate each message sent dev, and staging. Verify emails sent from live sites as well.</Text>
                    <Button variant={'outline'} backgroundColor={'white'}>Learn More</Button>

                </VStack>
                <VStack maxW={'xl'}>
                    <Image src={'https://mailtrap.io/wp-content/uploads/2021/01/auomation-logo.svg'} />
                    <Text as={'b'}>QA Automation</Text>
                    <Text>Build automated tests of your email sequences and include them in your testing suite. Verify each component of a message with Sandbox API.

                    </Text>
                    <Button variant={'outline'} backgroundColor={'white'}>Learn More</Button>

                </VStack>
            </Stack>
            {/* </Stack> */}
        </div>
    )
}