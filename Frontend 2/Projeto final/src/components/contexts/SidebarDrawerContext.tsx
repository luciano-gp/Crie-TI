import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode } from 'react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContext = UseDisclosureReturn;

export const SidebarDrawerContext = createContext({} as SidebarDrawerContext);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclousure = useDisclosure();
  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}