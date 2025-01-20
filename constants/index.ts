import { NavLink } from "../types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const NavLinks: NavLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/daas",
    label: "Services",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/blog",
    label: "Blog",
  },
  {
    route: "/contacts",
    label: "Contacts",
  },
];
