import {
  Text,
  Button,
  Stack,
  useToast,
  Card,
  StackDivider,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

function randomNuber() {
  return Math.floor(Math.random() * 10);
}

function generirajOIB() {
  let OIB = [];

  for (let i = 0; i < 10; i++) {
    OIB.push(randomNuber());
  }

  let kontrolnaZnamenka = 10;
  for (const indexNumber of OIB) {
    kontrolnaZnamenka += indexNumber;
    kontrolnaZnamenka %= 10;
    if (kontrolnaZnamenka === 0) kontrolnaZnamenka = 10;
    kontrolnaZnamenka *= 2;
    kontrolnaZnamenka %= 11;
  }

  OIB.push(11 - kontrolnaZnamenka === 10 ? 0 : 11 - kontrolnaZnamenka);

  return OIB.toString().replaceAll(",", "");
}

async function copyToClipBoardcopy(copyString: string) {
  await navigator.clipboard.writeText(copyString);
}

function App() {
  const [OIB, setOIB] = useState(generirajOIB());
  const toast = useToast();

  copyToClipBoardcopy(OIB);

  return (
    <Center marginTop="20">
      <Card p="10" maxW="2xl" boxShadow="lg">
        <Stack spacing={3} align="center" divider={<StackDivider />}>
          <Text fontSize="6xl">OIB Generator</Text>
          <Text fontSize="6xl">{OIB}</Text>
          <Button
            colorScheme="blue"
            mt="5"
            onClick={() => {
              setOIB(generirajOIB());
              toast({
                title: "OIB saved to clipboard",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top-right",
              });
            }}
          >
            Generiraj novi OIB
          </Button>
        </Stack>
      </Card>
    </Center>
  );
}

export default App;
