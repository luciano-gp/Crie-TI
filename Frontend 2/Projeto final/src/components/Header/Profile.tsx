import { Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData = false }: ProfileProps) {
    return (
        <>
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Luciano Gomes</Text>
                    <Text fontSize="small" color="gray.300">luciano.gp99@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Luciano Gomes" src="http://github.com/luciano-gp.png" />
        </>
    );
}