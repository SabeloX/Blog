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
        <div
            className={`
                flex
                container
                mx-auto
                ${styles.container} 
                justify-between
                items-center
                gap-9
                md:rounded-xl
            `}
        >
            <button
                className={`${styles.search} md:hidden`}
            >
                <Image
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt="menu"
                />
            </button>
            <ul
                className={`
                    md:flex
                    hidden
                    justify-center
                    flex-1
                    ${styles.list}
                `}>
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
                                className={`
                                    w-full
                                    ${styles.link}
                                `}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <button
                className={`${styles.search} flex-none`}
            >
                <Image
                    src="/icons/search.svg"
                    width={30}
                    height={30}
                    alt="search"
                />
            </button>
        </div>
    )
}