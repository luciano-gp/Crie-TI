import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button size="sm" fontSize="xs" w="4" colorScheme="blue" disabled _disabled={{ bg: "blue.500", cursor: "default" }}>{number}</Button>
        );
    }
    return (
        <Button size="sm" fontSize="xs" w="4" _hover={{ bg: "blue.500" }} bg="gray.700">{number}</Button>
    );
}