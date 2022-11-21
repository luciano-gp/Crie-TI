import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";


export function Sidebar() {
  const { isOpen, onClose } = useContext(SidebarDrawerContext);
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerOverlay>
          <DrawerContent p="8" bg="gray.800"> 
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <SidebarNav />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}