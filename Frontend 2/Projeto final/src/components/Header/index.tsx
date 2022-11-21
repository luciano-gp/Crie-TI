import { useContext } from 'react';
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { NotificationBar } from './NotificationBar';
import { Profile } from './Profile';
import { List } from 'phosphor-react';
import { SidebarDrawerContext, SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

export function Header() {
    const { onOpen } = useContext(SidebarDrawerContext);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    return (
        <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" px="6" pb="4" align="center" borderBottomWidth={1} borderColor="gray.800">
            {!isWideVersion && (
                <IconButton aria-label="Open navigation" icon={<Icon as={List} />} fontSize={24} variant="unstyled" mr="2" onClick={onOpen} />
            )}
            <Logo />
            {isWideVersion && (
                <SearchBox />
            )}
            <Flex align="center" ml="auto">
                <NotificationBar />
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}