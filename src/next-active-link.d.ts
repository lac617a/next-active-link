import React from "react";
import { LinkProps } from "next/link";
interface Props extends LinkProps {
    activeClassName: string;
    children: React.ReactNode;
}
/**
 * NavLink component.
 *
 * @param {Props} props - The component props.
 * @returns {React.ReactNode} - The rendered NavLink component.
 */
export default function NavLink({ children, activeClassName, ...props }: Readonly<Props>): React.ReactNode;
export {};
