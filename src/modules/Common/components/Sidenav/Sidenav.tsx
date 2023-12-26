import * as React from "react";
import Link from "next/link";
import classes from "./sidenav.module.css";
import { ReactElement } from "react";
import {useRouter} from "next/router";

type MenuData = {
  name: string;
  route: string;
  menuIcon: ReactElement
};
const SideNav: React.FC<{ menus: MenuData[] }> = (props) => {
  const menuArrays = props.menus ? [...props.menus] : [];
  const { pathname } = useRouter();
    return (
    <aside className={classes.sidebar}>
      <ul>
        {
          menuArrays.map((menu) => (
            <li key={menu.name}>
              <Link
                className={pathname.startsWith(menu.route) ? classes.active : ""}
                href={menu.route}
              >
                <i className={classes["menu-icon"]}>{menu.menuIcon}</i>
                <span>{menu.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

export default SideNav;