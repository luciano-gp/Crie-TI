import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { Input } from '../components/Input';

export function Login() {
    return (
        <Flex width="100vw" height="100vh" align="center" justify="center">
            <Flex as="form" width="100%" maxWidth={360} padding="8" bg="gray.700" borderRadius={8} flexDir="column">
                <Stack spacing="4">
                    <Input name="email" type="email" label="Email" placeholder="Email"/>
                    <Input name="password" type="password" label="Password" placeholder="Password"/>
                </Stack>
                <Button type="submit" marginTop="6" size="lg" colorScheme="blue">Login</Button>
            </Flex>
        </Flex>
    );
}