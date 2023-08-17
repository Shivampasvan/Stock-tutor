import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';


const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            //   pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                // pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                // transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} >
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};



export default class HomeTestimonial extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Center>
                    <Heading>From our #BestClientEver </Heading>

                </Center>
                <Slider {...settings}>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Easy to Use</TestimonialHeading>
                                            <TestimonialText>
                                                Just signed up for @ApiTest and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.
                                            </TestimonialText>
                                            <TestimonialText>
                                                7:38 PM - jan 13,2021
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Joshua Anderton'}
                                            title={'@joshuaaderton'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Easy to Use</TestimonialHeading>
                                            <TestimonialText>
                                                Just signed up for @ApiTest and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.
                                            </TestimonialText>
                                            <TestimonialText>
                                                7:38 PM - jan 13,2021
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Joshua Anderton'}
                                            title={'@joshuaaderton'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Easy to Use</TestimonialHeading>
                                            <TestimonialText>
                                                Just signed up for @ApiTest and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.
                                            </TestimonialText>
                                            <TestimonialText>
                                                7:38 PM - jan 13,2021
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Joshua Anderton'}
                                            title={'@joshuaaderton'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Easy to Use</TestimonialHeading>
                                            <TestimonialText>
                                                Just signed up for @ApiTest and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.
                                            </TestimonialText>
                                            <TestimonialText>
                                                7:38 PM - jan 13,2021
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Joshua Anderton'}
                                            title={'@joshuaaderton'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                                neque sed imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Jane Cooper'}
                                            title={'CEO at ABC Corporation'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                                neque sed imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Jane Cooper'}
                                            title={'CEO at ABC Corporation'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                                neque sed imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Jane Cooper'}
                                            title={'CEO at ABC Corporation'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                    <div>
                        <Box>
                            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                                neque sed imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={
                                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                                            }
                                            name={'Jane Cooper'}
                                            title={'CEO at ABC Corporation'}
                                        />
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </div>
                </Slider>
            </div>
        );
    }
}
