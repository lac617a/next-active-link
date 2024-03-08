import React from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

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
export default function NavLink({
  children,
  activeClassName,
  ...props
}: Readonly<Props>): React.ReactNode {
  const router = useRouter();
  const child = React.Children.only(children) as any;

  // Check if the pathname is equal to the href prop
  const isActive = router.pathname === props.href;

  let className = child.props.className || "";

  if (isActive && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}
