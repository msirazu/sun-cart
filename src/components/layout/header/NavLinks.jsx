'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({href, children, className}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link className={`${isActive ? 'text-second font-bold' : ''} ${className}`} href={href}>{children}</Link>
    );
};

export default NavLinks;