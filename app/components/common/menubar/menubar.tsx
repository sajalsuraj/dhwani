import styles from "./menubar.module.css";
import { NavLink } from "@remix-run/react";

interface MenubarProps {
  pagePath: string;
}

export default function Menubar({ pagePath }: MenubarProps) {
  return (
    <div
      className={`${styles.menuBar} bgPictonBlue px-[104px] flex justify-between items-center h-[45px]`}
    >
      <div className="flex gap-[80px]">
        <NavLink
          to="/dashboard"
          className={`text-white ${
            pagePath === "/dashboard" ? "font-bold underline" : "font-normal"
          } uppercase`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard"
          className={`text-white ${
            pagePath === "/chatbox" ? "font-bold underline" : "font-normal"
          } uppercase`}
        >
          Chatbox
        </NavLink>
        <NavLink
          to="/dashboard"
          className={`text-white ${
            pagePath === "/account" ? "font-bold underline" : "font-normal"
          } uppercase`}
        >
          Menu
        </NavLink>
      </div>

      <div>
        <button className="text-white font-normal">Logout</button>
      </div>
    </div>
  );
}
