import { Image, Box, HStack } from "@chakra-ui/react";

//cheat line no 29 marginTop

export default function Part2() {
  return (
    <Box mt={11}>
      <HStack justify={"center"} flexWrap={"wrap"} gap={10}>
        <Image
          boxSize="150px"
          src="https://static.thenounproject.com/png/5770655-200.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          src="https://static.thenounproject.com/png/4347142-200.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          src="https://static.thenounproject.com/png/4871426-200.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          src="https://static.thenounproject.com/png/401996-200.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          src="https://static.thenounproject.com/png/4567211-200.png"
          alt="Dan Abramov"
        />
      </HStack>
    </Box>
  );
}
