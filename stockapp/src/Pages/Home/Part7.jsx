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
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"md"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 5,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "10%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text textAlign={"center"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={4} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"}>{title}</Text>
      </Stack>
    </Flex>
  );
};

export default class HomeTestimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 5000,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box mt={20}>
        <Center>
          <Heading>
            From our{" "}
            <span
              style={{
                color: "rgb(34,209,114)",
              }}
            >
              #BestClientEver
            </span>{" "}
          </Heading>
        </Center>
        <Container maxW={"3xl"}>
          <Slider {...settings}>
            <div>
              <Box>
                <Container maxW={"md"} py={16} as={Stack} spacing={12}>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 1, md: 4, lg: 1 }}
                  >
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>Easy to Use</TestimonialHeading>
                        <TestimonialText>
                          Learning trading has never been easier! Stock tutor's
                          user-friendly platform brings the world of trading
                          knowledge right to your fingertips, breaking down
                          complex concepts into easy-to-understand bites.
                        </TestimonialText>
                        <TestimonialText>7:38 PM - jan 13,2021</TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={
                          "https://i.ibb.co/R48Vrdc/download-removebg-preview.png"
                        }
                        name={"Joshua Anderton"}
                        title={"@joshuaaderton"}
                      />
                    </Testimonial>
                  </Stack>
                </Container>
              </Box>
            </div>
            <div>
              <Box>
                <Container maxW={"md"} py={16} as={Stack} spacing={12}>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                  >
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>It's Awsome</TestimonialHeading>
                        <TestimonialText>
                          From day one, I've been blown away by how
                          user-friendly and intuitive the platform is. Learning
                          about stocks and trading can be overwhelming, but
                          StockTutor breaks everything down into manageable and
                          engaging modules.
                        </TestimonialText>
                        <TestimonialText>1:28 PM - Nov 07,2020</TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={
                          "https://i.ibb.co/R48Vrdc/download-removebg-preview.png"
                        }
                        name={"DeveloperMitch"}
                        title={"@mitchellfinlay"}
                      />
                    </Testimonial>
                  </Stack>
                </Container>
              </Box>
            </div>
            <div>
              <Box>
                <Container maxW={"md"} py={16} as={Stack} spacing={12}>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                  >
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>
                          Totally Worth It.
                        </TestimonialHeading>
                        <TestimonialText>
                          Can't contain my excitement about how using StockTutor
                          has totally transformed my journey in the stock market
                          world!
                        </TestimonialText>
                        <TestimonialText>1:38 PM - jan 16,2021</TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={
                          "https://i.ibb.co/R48Vrdc/download-removebg-preview.png"
                        }
                        name={"Alessandro Rodi"}
                        title={"@coorasse"}
                      />
                    </Testimonial>
                  </Stack>
                </Container>
              </Box>
            </div>
            <div>
              <Box>
                <Container maxW={"md"} py={16} as={Stack} spacing={12}>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                  >
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>It's great.</TestimonialHeading>
                        <TestimonialText>
                          Your platform is a treasure trove of trading wisdom!
                          The way you break down complex concepts into
                          bite-sized lessons is pure genius. I've gone from
                          feeling overwhelmed to confident in no time.
                        </TestimonialText>
                        <TestimonialText>
                          7:38 PM - May 22,20219
                        </TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={
                          "https://i.ibb.co/R48Vrdc/download-removebg-preview.png"
                        }
                        name={"MR. Glass"}
                        title={"@MisterGlass"}
                      />
                    </Testimonial>
                  </Stack>
                </Container>
              </Box>
            </div>
            <div>
              <Box>
                <Container maxW={"md"} py={16} as={Stack} spacing={12}>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                  >
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>
                          Great Environment
                        </TestimonialHeading>
                        <TestimonialText>
                          I couldn't be more appreciative of the incredible
                          environment that StockTutor has crafted for traders
                          like me. Your dedication to creating a supportive and
                          empowering space is truly commendable.
                        </TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={
                          "https://i.ibb.co/R48Vrdc/download-removebg-preview.png"
                        }
                        name={"Rado Georgiev"}
                        title={"@Rado_g"}
                      />
                    </Testimonial>
                  </Stack>
                </Container>
              </Box>
            </div>
          </Slider>
        </Container>
      </Box>
    );
  }
}
