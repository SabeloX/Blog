"use client"
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
    {
        label: "HOME",
        route: "/"
    },
    {
        label: "CATEGORY",
        route: "/category"
    },
    {
        label: "ABOUT ME",
        route: "/about"
    },
    {
        label: "CONTACT",
        route: "/contact"
    }
]

export const Navbar = () => {
    const currentPath = usePathname();
    const isActive = (item: string) => currentPath === item
    return (
        <ul
            className={`
                flex
                container
                mx-auto
                ${styles.container} 
                justify-center
                items-center
                gap-9
                rounded-xl
            `}
        >
            {
                navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`
                        nav-item
                        ${isActive(item.route) && styles.active}
                        ${styles.item}
                    `}
                    >
                        <Link
                            href={item.route}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))
            }
            <button
                className={styles.search}
            >
                <Image
                    src="icons/search.svg"
                    width={30}
                    height={30}
                    alt="search"
                />
            </button>
        </ul>
    )
}