import {
    Box,
    Center,
    Image, Text, VStack,HStack
} from '@chakra-ui/react';

export default function SPart3() {
    return (
        <div>
            <Box marginTop={'100px'} marginBottom={'100px'}>
                <Center>
                    <Text fontSize={'4xl'}>Trusted by 150,000+ monthly active users</Text>
                </Center>
                <Box>
                    <HStack justifyContent={'center'} flexWrap={'wrap'} marginTop={'50px'} spacing={40}>
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg' />
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg' />
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg' />
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg' />
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg' />
                    </HStack>
                </Box>
            </Box>
        </div>

    )
}