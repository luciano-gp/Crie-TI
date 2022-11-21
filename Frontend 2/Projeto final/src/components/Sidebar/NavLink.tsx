import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    label: string;
    icon: ElementType;
    href: string;
}

export function NavLink({ label, icon, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink to={href}>
            <Link display="flex" verticalAlign="center" {...rest}>
                <Icon as={icon} fontSize={24} />
                <Text fontSize="md" ml="4">{label}</Text>
            </Link>
        </ActiveLink>
    );
}