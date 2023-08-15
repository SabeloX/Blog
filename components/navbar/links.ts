export type NavItem = {
    label: string;
    route: string;
}

export const navItems: NavItem[] = [
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
