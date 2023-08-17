import {
  Center,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Stack,
  HStack,
  VStack,
  Circle,
  Box,
} from "@chakra-ui/react";

export default function Part6() {
  return (
    <Box mt={20}>
      <center>
        <Text fontSize="4xl" width={"20%"} as={"b"}>
          How different teams use{" "}
          <span
            style={{
              color: "rgb(34,209,114)",
            }}
          >
            Stock
          </span>{" "}
          Tutor
        </Text>
        <Image
          mt={14}
          src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg"
        />
      </center>

      <TableContainer mt={20}>
        <Table variant="unstyled" size={"sm"} lineHeight="10px">
          <TableCaption mt={20}>
            <Button bg={"#22D172"} color={"white"} size="lg">
              Sign Up For Free
            </Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Developers</Th>
              <Th>QAs</Th>
              <Th>Marketers and managers</Th>
            </Tr>
          </Thead>
          <Tbody flexWrap={"wrap"}>
            <Tr>
              <Td>Experiment with the email sending functionality</Td>
              <Td>Run safe tests in staging and/or testing environment</Td>
              <Td>Smoothly collaborate with development and QA teams</Td>
            </Tr>
            <Tr>
              <Td>Cover code with tests to run automated checks via API</Td>
              <Td>Integrate API with automated testing tools</Td>
              <Td>View test in shared inboxes or forward to recipients</Td>
            </Tr>
            <Tr>
              <Td>
                Verify different aspects, debug sending script and HTML template
              </Td>
              <Td>Compare revised information with their previous versions</Td>
              <Td>Send emails from CRMs and common sending tools</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
