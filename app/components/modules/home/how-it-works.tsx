import styles from "./home.module.css";

export default function HowItWorks() {
  return (
    <div className="py-[100px] px-[25%]">
      <h2 className="heading2 colorPictonBlue text-center">How it Works</h2>
      <div className={`${styles.verticalStepper}`}>
        <div className="relative">
            <div className="w-[62px] h-[64px] bgSelected flex justify-center items-center colorWhite text-3xl">01</div>
            <div className="w-[62px] h-[64px] bgSelected flex justify-center items-center colorWhite mt-32 text-3xl">02</div>
            <div className="w-[62px] h-[64px] bgSelected flex justify-center items-center colorWhite mt-36 text-3xl">03</div>
            <div className={`absolute ${styles.verticalLine} bgSelected`}></div>
        </div>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div className="basis-1/3">
          <h5 className="heading5">Heading 1</h5>
          <p className="font-normal text-[#5F5F5F] mt-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`basis-1/3 bg-no-repeat bg-cover ${styles.howItWorksBg1}`}
        ></div>
      </div>

      <div className="flex justify-between mt-[70px]">
        <div
          className={`basis-1/3 bg-no-repeat bg-cover ${styles.howItWorksBg2}`}
        ></div>
        <div className="basis-1/3">
          <h5 className="heading5">Heading 2</h5>
          <p className="font-normal text-[#5F5F5F] mt-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-[70px]">
        <div className="basis-1/3">
          <h5 className="heading5">Heading 3</h5>
          <p className="font-normal text-[#5F5F5F] mt-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className={`basis-1/3 bg-no-repeat bg-cover ${styles.howItWorksBg3}`}
        ></div>
      </div>
    </div>
  );
}
