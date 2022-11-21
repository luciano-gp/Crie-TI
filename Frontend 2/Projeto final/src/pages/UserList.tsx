import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, IconButton, Table, Tbody, Td, Text, Th, Thead, theme, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Plus, PencilSimple, Trash } from 'phosphor-react';
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import useUserEditModal from "../components/Modals/UserEditModal";

export function UserList() {
  const { onClose, onOpen, UserEditModal } = useUserEditModal();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflowY="auto" css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.colors.blue[100],
            borderRadius: "24px",
          },
        }}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link to="/users/create">
              <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={Plus} />}>New user</Button>
            </Link>
          </Flex>
          <Table>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Users</Th>
                <Th>Creation date</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Luciano Gomes</Text>
                    <Text fontSize="sm" color="gray.300">luciano.gp@gmail.com</Text>
                  </Box>
                </Td>
                <Td>October 27, 2022</Td>
                <Td>
                  {isWideVersion ? (
                    <HStack justify="flex-end">
                      <Button as="a" size="sm" fontSize="sm" colorScheme="yellow" onClick={onOpen} leftIcon={<Icon as={PencilSimple} />}>Edit</Button>
                      <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={Trash} />}>Delete</Button>
                    </HStack>
                  ) : (
                    <HStack justify="flex-end">
                      <IconButton aria-label="Edit" icon={<Icon as={PencilSimple} fontSize={16} />} fontSize={24} colorScheme="yellow" mr="2" onClick={onOpen} />
                      <IconButton aria-label="Delete" icon={<Icon as={Trash} fontSize={16} />} fontSize={24} colorScheme="red" mr="2" />
                    </HStack>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
      {UserEditModal}
    </Flex >
  );
}