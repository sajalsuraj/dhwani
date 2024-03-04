import styles from "./auth.module.css";
import rightBG from "app/assets/images/login-cover.png";

interface LoginProps {
  setActiveAuthPage: (authPage: string) => void;
}

const Form = () => {
  return (
    <form>
      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">Email ID</label>
          <div className="w-full">
            <input
              type="email"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Password{" "}
            <a className="colorVikingBlue underline float-right" href="">
              Forgot Password
            </a>
          </label>
          <div className="w-full">
            <input
              type="password"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Mobile Number
          </label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Enter OTP
            <button className="float-right bg-[#D4D4D4] colorBlack text-[10px] font-normal w-[75px] mb-[5px] rounded-[21px]">
              Send OTP
            </button>
          </label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <button
            className={`bgVikingBlue text-white w-full font-bold text-lg rounded-[5px] ${styles.loginBtn}`}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default function Login({ setActiveAuthPage }: LoginProps) {
  return (
    <div className={`w-[1196px] ${styles.authModalContent} bgWhite`}>
      <div className="flex">
        <div className={`py-[63px] ${styles.formSection} px-[30px] basis-[50%] fontTTNorms`}>
          <div
            className={`py-[35px] px-[40px] rounded-[10px] ${styles.authForm}`}
          >
            <h1 className="heading1 colorPictonBlue">Login</h1>
            <p className="colorGreyDark text-lg font-normal">
              New to Dhwani?{" "}
              <a
                className="colorVikingBlue underline cursor-pointer"
                onClick={() => setActiveAuthPage("signup")}
              >
                Sign up
              </a>
            </p>

            <div className="mt-[20px]">
              <Form />
            </div>
          </div>
        </div>

        <div className="basis-[50%]">
          <img className="h-full w-full" src={rightBG} />
        </div>
      </div>
    </div>
  );
}
