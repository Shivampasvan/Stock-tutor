import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Stack,
  Container,
  HStack,
  Avatar,
  useColorModeValue,
  Center,
  VStack,
} from "@chakra-ui/react";

export default function Part9() {
  return (
    <div>
      <Heading>
        <Center>Frequently asked Questions</Center>
      </Heading>
      <Stack direction={["row", "column"]} marginY={"30px"}>
        <HStack
          margin={"auto"}
          flexWrap={"wrap"}
          spacing={"10"}
          justifyContent={"center"}
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      Where should I start as a beginner in trading?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Begin by learning the fundamentals of trading, including basic
                concepts like market types, order types, and risk management.
                Consider taking introductory courses or reading
                beginner-friendly trading books.
              </Text>
            </CardBody>
          </Card>
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex
                  flex="1"
                  gap="4"
                  alignItems="center"
                  flexWrap="wrap"
                  borderColor={"gray.500"}
                >
                  <Box>
                    <Heading size="sm">
                      How much money do I need to start trading?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                The amount of money needed to start trading varies. It's
                recommended to start with an amount you can afford to lose
                without affecting your financial stability. Many brokers offer
                low minimum deposit accounts.
              </Text>
            </CardBody>
          </Card>
        </HStack>
      </Stack>
      <Stack direction={["row", "column"]} marginY={"30px"}>
        <HStack
          margin={"auto"}
          flexWrap={"wrap"}
          spacing={"10"}
          justifyContent={"center"}
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      What trading strategy should I use?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                There are various trading strategies. Your choice depends on
                your risk tolerance, time commitment, and market preferences.
                It's important to thoroughly learn and practice a strategy
                before using it.
              </Text>
            </CardBody>
          </Card>
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      Can I learn trading on my own or do I need a mentor?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Learning on your own is possible, but having a mentor or joining
                a trading community can accelerate your learning. A mentor can
                provide guidance, insights, and help you avoid common pitfalls.
              </Text>
            </CardBody>
          </Card>
        </HStack>
      </Stack>
      <Stack direction={["row", "column"]} marginY={"30px"}>
        <HStack
          margin={"auto"}
          flexWrap={"wrap"}
          spacing={"10"}
          justifyContent={"center"}
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      How do I manage risk in trading?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Risk management is crucial. Never invest more than you can
                afford to lose. Use techniques like setting stop-loss orders,
                diversifying your portfolio, and not putting all your capital
                into a single trade.
              </Text>
            </CardBody>
          </Card>
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      What tools and software do I need for trading?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                You'll need a reliable computer or device, internet connection,
                and a trading platform provided by a broker. Additionally,
                charting software and news sources can be helpful for analysis.
              </Text>
            </CardBody>
          </Card>
        </HStack>
      </Stack>
      <Stack direction={["row", "column"]} marginY={"30px"}>
        <HStack
          margin={"auto"}
          flexWrap={"wrap"}
          spacing={"10"}
          justifyContent={"center"}
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      How long does it take to become a successful trader?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Becoming a successful trader takes time and practice. It can
                vary widely, but it often takes years of consistent learning,
                practicing strategies, and adapting to changing market
                conditions.
              </Text>
            </CardBody>
          </Card>
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">
                      What are some common trading mistakes to avoid?
                    </Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Avoid overtrading, not having a clear trading plan, not
                conducting proper research, and letting emotions dictate
                decisions. Learning from these mistakes can lead to improvement.
              </Text>
            </CardBody>
          </Card>
        </HStack>
      </Stack>
    </div>
  );
}
