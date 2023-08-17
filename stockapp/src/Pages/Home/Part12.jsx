import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Part12() {
  return (
    <Box mt={20}>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>
            Mastering Trading Made Effortless: Elevate Your Skills with{" "}
            <span
              style={{
                color: "rgb(34,209,114)",
              }}
            >
              Stock
            </span>{" "}
            Tutor's Innovative Learning Solutions.
          </Heading>
        </Stack>

        <Container maxW={"6xl"} mt={16}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            <HStack align={"top"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Interactive Simulations</Text>
                <Text color={"gray.600"}>
                  Utilizing realistic trading simulations that mimic real market
                  conditions, helping learners practice strategies, analyze
                  trends, and make informed decisions without real financial
                  risk.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Personalized Learning Paths</Text>
                <Text color={"gray.600"}>
                  Tailoring learning materials based on individual skill levels,
                  interests, and goals, ensuring that each trader receives
                  relevant content and progresses at their own pace.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"} margin={"auto"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Practical Application Challenges</Text>
                <Text color={"gray.600"}>
                  Assigning tasks that require learners to apply their knowledge
                  in real trading scenarios, enhancing their critical thinking
                  skills and boosting confidence in executing trades.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Case Studies and Examples</Text>
                <Text color={"gray.600"}>
                  Presenting real-life trading scenarios and case studies to
                  illustrate successful strategies, fostering a well-rounded
                  understanding of trading dynamics.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Expert Mentorship</Text>
                <Text color={"gray.600"}>
                  Providing access to experienced traders who can offer
                  guidance, answer questions, and share real-world insights,
                  helping beginners navigate the complexities of trading.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box boxSize={150} color={"green.400"} px={2}>
                <Image src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg" />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Real-time Market Analysis</Text>
                <Text color={"gray.600"}>
                  Offering up-to-date market analysis, news updates, and trend
                  predictions, enabling learners to practice making decisions
                  based on current market conditions.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
