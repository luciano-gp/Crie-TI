import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>1</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent={true}/>
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
        <PaginationItem number={4}/>
      </HStack>
    </HStack>
  )
}