import { Box, Button, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";

export function UserCreate() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Add user
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <Grid w="100%" templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(8, 1fr)"]} gap="8">
              <GridItem colSpan={3}>
                <Input name="name" label="Full name" />
              </GridItem>
              <GridItem colSpan={3}>
                <Input name="email" label="Email" />
              </GridItem>
              <GridItem colSpan={1}>
                <Input name="age" label="Age" />
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <Input name="genre" label="Genre" />
              </GridItem>
            </Grid>
            <SimpleGrid flex="1" gap="8" minChildWidth="1fr" w="100%" templateColumns={["1fr", "1fr", "1fr 1fr"]}>
              <Input name="password" type="password" label="Password" placeholder="Password" />
              <Input name="password" type="password" label="Repeat password" placeholder="Password" />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end" gap="4">
            <Link to="/users">
              <Button colorScheme="whiteAlpha">Cancel</Button>
            </Link>
            <Button colorScheme="blue">Save</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}