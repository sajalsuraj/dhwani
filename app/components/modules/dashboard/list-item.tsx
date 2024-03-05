import childDP from "app/assets/images/profile.png";
import { GoArrowRight } from "react-icons/go";
import styles from "./dashboard.module.css";

export default function ListItem() {
  return (
    <div
      className={`bg-[#F2F2F2] h-[67px] rounded-[10px] flex justify-between items-center px-[12px] py-[5px]`}
    >
      <div className="flex items-center gap-[10px]">
        <div>
          <img src={childDP} alt="" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-lg font-normal">Child Name</p>
          <p className="font-light">Child ID</p>
        </div>
      </div>

      <div>10</div>

      <div className="flex items-center gap-[20px]">
        <span>DD Month, YYYY</span>
        <button>
          <GoArrowRight className="colorPictonBlue text-lg" />
        </button>
      </div>
    </div>
  );
}
