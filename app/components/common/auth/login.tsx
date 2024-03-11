import { signIn } from "~/utils/db";
import styles from "./auth.module.css";
import rightBG from "app/assets/images/login-cover.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { LoginForm } from "~/@types/auth.types";
import { toast, ToastContainer } from "react-toastify";
import { setCookie } from "~/utils/cookie.util";
import { useNavigate } from "@remix-run/react";

interface LoginProps {
  setActiveAuthPage: (authPage: string) => void;
  onModalClose: (modalState: boolean) => void;
}

const Form = ({
  onModalClose,
}: {
  onModalClose: (modalState: boolean) => void;
}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await signIn({
        email: data.emailId,
        password: data.password,
      });
      setCookie("uId", response.user.uId);
      setCookie("email", response.user.email);
      onModalClose(false);
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">Email ID</label>
          <div className="w-full">
            <input
              type="email"
              alt=""
              {...register("emailId", { required: true })}
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
              {...register("password", { required: true })}
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
              {...register("phoneNumber", { required: true })}
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Enter OTP
            <button
              id="otpBtn"
              type="button"
              className="float-right bg-[#D4D4D4] colorBlack text-[10px] font-normal w-[75px] mb-[5px] rounded-[21px]"
            >
              Send OTP
            </button>
          </label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              {...register("otp", { required: true })}
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <button
            type="submit"
            className={`bg-[#49d3de] text-white w-full font-bold text-lg rounded-[5px] ${styles.loginBtn}`}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default function Login({ setActiveAuthPage, onModalClose }: LoginProps) {
  return (
    <>
      <div
        className={`xl:w-[1196px] ${styles.authModalContent} lg:w-[800px] bgWhite`}
      >
        <div className="flex">
          <div
            className={`py-[63px] ${styles.formSection} px-[30px] basis-[50%] fontTTNorms`}
          >
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
                <Form onModalClose={onModalClose} />
              </div>
            </div>
          </div>

          <div className="basis-[50%]">
            <img className="h-full w-full" src={rightBG} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
