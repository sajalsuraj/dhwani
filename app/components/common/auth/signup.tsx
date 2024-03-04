import styles from "./auth.module.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import leftBG from "app/assets/images/signup-cover.png";
import { useState } from "react";

interface SignupProps {
  setActiveAuthPage: (authPage: string) => void;
}

const FormStep1 = () => {
  return (
    <form>
      <div className="flex gap-[10px] justify-between">
        <div className="basis-5/12">
          <label className="text-lg font-bold colorGreyDark">First Name</label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
        <div className="basis-5/12">
          <label className="text-lg font-bold colorGreyDark">Last Name</label>
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
          <label className="text-lg font-bold colorGreyDark">Gender</label>
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
            Mobile Number
          </label>
          <div className="w-full">
            <input
              type="number"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] justify-between mt-[20px]">
        <div className="basis-5/12">
          <label className="text-lg font-bold colorGreyDark">
            Create Password
          </label>
          <div className="w-full">
            <input
              type="password"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
        <div className="basis-5/12">
          <label className="text-lg font-bold colorGreyDark">
            Confirm Password
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
    </form>
  );
};

const FormStep2 = () => {
  return (
    <form>
      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Name of the Institution
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
          <label className="text-lg font-bold colorGreyDark">Location</label>
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
          <label className="text-lg font-bold colorGreyDark">Profession</label>
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
            Name of the Manager
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
          <label className="text-lg font-bold colorGreyDark">Manager ID</label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default function Signup({ setActiveAuthPage }: SignupProps) {
  const [formStep, setFormStep] = useState(0);

  const handleSignupSubmit = () => {
    if (formStep === 0) {
      setFormStep(1);
    }
  };

  return (
    <div className={`w-[1196px] ${styles.authModalContent} bgWhite`}>
      <div className="flex">
        <div className="basis-[40%]">
          <img
            className={`${formStep === 1 ? "w-full h-full" : ""}`}
            src={leftBG}
          />
        </div>
        <div className={`py-[63px] ${styles.formSection} px-[30px] basis-[60%] fontTTNorms`}>
          <div
            className={`py-[35px] px-[40px] rounded-[10px] ${styles.authForm}`}
          >
            <h1 className="heading1 colorPictonBlue">Sign Up</h1>
            <p className="colorGreyDark text-lg font-normal">
              Have an account already?{" "}
              <a
                className="colorVikingBlue underline cursor-pointer"
                onClick={() => setActiveAuthPage("login")}
              >
                Log In
              </a>
            </p>

            <div className="mt-[20px]">
              {formStep === 0 && <FormStep1 />}
              {formStep === 1 && <FormStep2 />}
              <div className="flex mt-[20px] justify-between">
                <div>
                  {formStep === 1 && (
                    <button
                      onClick={() => setFormStep(0)}
                      className="rounded-[50%] w-[50px] h-[50px] bgPictonBlue text-white flex justify-center items-center"
                    >
                      <GoArrowLeft className="text-[25px]" />
                    </button>
                  )}
                </div>
                <div></div>
                <div>
                  <button
                    onClick={() => handleSignupSubmit()}
                    className="rounded-[50%] w-[50px] h-[50px] bgPictonBlue text-white flex justify-center items-center"
                  >
                    <GoArrowRight className="text-[25px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
