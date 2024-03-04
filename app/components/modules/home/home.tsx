import styles from "./home.module.css";
import playIcon from "../../../assets/images/icons/play.svg";
import HowItWorks from "./how-it-works";

export default function Home() {
  return (
    <>
    <div className={`${styles.homeCover} relative`}>
      <div className={`${styles.subHeader} bgWhite h-[45px]`}></div>

      <div
        className={`w-[745px] h-[309px] bgWhite rounded-[10px] ${styles.centeredDiv} bg-[#F8F8F8] flex justify-center items-center`}
      >
        <img src={playIcon} alt="" />
        <button
          className={`w-[264px] h-[65px] rounded-[50px] mb-[-300px] ${styles.signUpBtn} text-white bgPictonBlue absolute`}
        >
          SIGN UP
        </button>
      </div>
    </div>
    <HowItWorks />
    </>
  );
}
