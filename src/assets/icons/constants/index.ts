import { MenuIcon, StarIcon } from "..";

export const ICON_MAP = {
    star: StarIcon,
    menu: MenuIcon
};

export type IconName = keyof typeof ICON_MAP;