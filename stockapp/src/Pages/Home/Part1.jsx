import {
  Card,
  CardHeader,
  StackDivider,
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
} from "@chakra-ui/react";

//cheat - line no 29 marginTop

export default function Part1() {
  return (
    <div>
      <Box>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 10 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"100%"}
            >
              <span
                style={{
                  color: "rgb(34,209,114)",
                }}
              >
                Stock
              </span>{" "}
              Tutor <br />
            </Heading>
            <Text
              color={"gray.500"}
            //   fontSize="2xl"
              align={"center"}
              gap={"8px"}
              lineHeight={"50px"}
              fontSize={{ base: "md", sm: "md", md: "xl", lg:"xl" }}
            >
              Embark on a journey to financial empowerment! Our
              comprehensive trading program offers the knowledge and skills you
              need to navigate the markets confidently. Join us today and start
              your path to successful trading !!
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                bg={"#22D172"}
                size="lg"
                _hover={{
                  bg: "green.500",
                }}
              >
                Get Started
              </Button>
              <Box></Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
