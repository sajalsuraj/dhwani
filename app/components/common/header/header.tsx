import logo from "app/assets/images/logo.svg";
import styles from "./header.module.css";

interface HeaderProps {
    onLoginClick: (modalState: boolean) => void;
}

export default function Header({onLoginClick}: HeaderProps) {
  return (
    <>
      <header>
        <div className="h-[45px] bgPictonBlue"></div>
        <div
          className={`h-[150px] px-[104px] flex justify-between items-center ${styles.header}`}
        >
          <img className="w-[207px] h-[92px]" src={logo} alt="" />
          <button onClick={() => onLoginClick(true)} className="bgVikingBlue colorWhite px-8 py-2 rounded-md">
            Login
          </button>
        </div>
      </header>
    </>
  );
}
