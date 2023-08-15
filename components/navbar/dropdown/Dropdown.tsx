"use client";
import Link from "next/link";
import { navItems } from "../links";
import styles from "./Dropdown.module.css";
import { Dispatch, SetStateAction, useState } from "react";

export interface DropdownProps {
    openDropdown: boolean;
    setOpenDropdown: Dispatch<SetStateAction<boolean>>
}

export const Dropdown = ({ openDropdown, setOpenDropdown }: DropdownProps) => {
    return (
        <ul
            className={`
                ${styles.container}
                md:hidden
                ${!openDropdown ? "hidden" : "flex"}
                flex
                flex-col
                gap-10
                w-full
                mx-auto
            `}
        >
            {
                navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`
                            nav-item
                            ${styles.item}
                        `}
                    >
                        <Link
                            href={item.route}
                            className={`
                                w-full
                                ${styles.link}
                            `}
                            onClick={() => setOpenDropdown(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}