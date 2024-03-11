import styles from "./auth.module.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import leftBG from "app/assets/images/signup-cover.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { SignupForm } from "~/@types/auth.types";
import {
  useForm,
  UseFormRegister,
  UseFormWatch,
  SubmitHandler,
} from "react-hook-form";
import { signUp } from "~/utils/db";

interface SignupProps {
  setActiveAuthPage: (authPage: string) => void;
  onModalClose: (modalState: boolean) => void;
}

const FormStep1 = ({
  register,
  watch,
}: {
  register: UseFormRegister<SignupForm>;
  watch: UseFormWatch<SignupForm>;
}) => {
  return (
    <>
      <div className="flex gap-[10px] justify-between">
        <div className="basis-5/12">
          <label className="text-lg font-bold colorGreyDark">First Name</label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              {...register("firstName", { required: true })}
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
              {...register("lastName", { required: true })}
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
              {...register("gender", { required: true })}
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
              {...register("phoneNumber", { required: true })}
              alt=""
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">Email ID</label>
          <div className="w-full">
            <input
              type="email"
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
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
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FormStep2 = ({
  register,
  watch,
}: {
  register: UseFormRegister<SignupForm>;
  watch: UseFormWatch<SignupForm>;
}) => {
  return (
    <>
      <div className="mt-[20px]">
        <div>
          <label className="text-lg font-bold colorGreyDark">
            Name of the Institution
          </label>
          <div className="w-full">
            <input
              type="text"
              alt=""
              {...register("institutionName", { required: true })}
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
              {...register("location", { required: true })}
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
              {...register("profession", { required: true })}
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
              {...register("managerName", { required: true })}
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
              {...register("managerID", { required: true })}
              className={`w-full ${styles.signupFields} rounded-[5px] p-[10px]`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FormLayout = ({
  formStep,
  setFormStep,
  setActiveAuthPage,
  register,
  watch,
}: {
  formStep: number;
  setFormStep: (formStep: number) => void;
  setActiveAuthPage: (activePageName: string) => void;
  register: UseFormRegister<SignupForm>;
  watch: UseFormWatch<SignupForm>;
}) => {
  return (
    <div className="flex">
      <div className="basis-[40%]">
        <img className={`w-full h-full`} src={leftBG} />
      </div>
      <div
        className={`py-[63px] ${styles.formSection} px-[30px] basis-[60%] fontTTNorms`}
      >
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
            {formStep === 0 && <FormStep1 register={register} watch={watch} />}
            {formStep === 1 && <FormStep2 register={register} watch={watch} />}
            <div className="flex mt-[20px] justify-between">
              <div>
                {formStep === 1 && (
                  <button
                    type="button"
                    onClick={() => setFormStep(0)}
                    className="rounded-[50%] w-[50px] h-[50px] bg-[#3aade4] text-white flex justify-center items-center"
                  >
                    <GoArrowLeft className="text-[25px]" />
                  </button>
                )}
              </div>
              <div></div>
              <div>
                <button
                  type="button"
                  onClick={() => setFormStep(formStep === 1 ? 2 : 1)}
                  className="rounded-[50%] w-[50px] h-[50px] bg-[#3aade4] text-white flex justify-center items-center"
                >
                  <GoArrowRight className="text-[25px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Terms = ({
  onModalClose,
  setFormStep,
  setActiveAuthPage,
}: {
  setFormStep: (formStep: number) => void;
  onModalClose: (modalState: boolean) => void;
  setActiveAuthPage: (authPage: string) => void;
}) => {
  return (
    <div className="bg-[#F2F2F2] py-[27px] px-[40px]">
      <h3 className="text-center text-[18px] font-bold colorGreyDarker">
        Terms and Conditions
      </h3>
      <div className="overflow-y-auto mt-[30px] max-h-[350px]">
        <p className="colorGreyDarker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sem integer
          vitae justo eget magna. Et odio pellentesque diam volutpat commodo. At
          in tellus integer feugiat scelerisque varius morbi enim nunc. Amet
          tellus cras adipiscing enim eu turpis egestas pretium. A lacus
          vestibulum sed arcu. Fermentum posuere urna nec tincidunt praesent
          semper. Sed tempus urna et pharetra pharetra massa massa. Diam sit
          amet nisl suscipit adipiscing bibendum. Vitae semper quis lectus nulla
          at volutpat diam. Semper risus in hendrerit gravida. Ullamcorper a
          lacus vestibulum sed arcu non. Donec massa sapien faucibus et molestie
          ac. Curabitur vitae nunc sed velit dignissim. Lectus nulla at volutpat
          diam ut venenatis tellus in. Lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor. Posuere ac ut consequat Felis bibendum ut
          tristique et egestas quis ipsum suspendisse. Ullamcorper velit sed
          ullamcorper morbi tincidunt ornare massa eget egestas. Aliquet nec
          ullamcorper sit amet risus. Elit sed vulputate mi sit amet mauris
          commodo quis imperdiet. At tempor commodo ullamcorper a lacus
          vestibulum sed arcu non. In vitae turpis massa sed elementum tempus
          egestas sed. Odio eu feugiat pretium nibh ipsum consequat. Pharetra
          convallis posuere morbi leo urna molestie at elementum. Auctor elit
          sed vulputate mi sit. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.
        </p>
      </div>

      <div className="flex justify-between mt-[30px]">
        <button
          onClick={() => {
            setFormStep(0);
            setActiveAuthPage("login");
            onModalClose(false);
          }}
          className="bg-[#d4d4d4] secondaryBtn"
        >
          Cancel
        </button>
        <button type="submit" className="bg-[#707070] text-white primaryBtn">
          I Agree
        </button>
      </div>
    </div>
  );
};

const UniqueID = ({
  setFormStep,
  onModalClose,
  uniqueID,
}: {
  setFormStep: (formStep: number) => void;
  onModalClose: (modalState: boolean) => void;
  uniqueID: string;
}) => {
  return (
    <div className="bg-[#F2F2F2] py-[27px] px-[40px]">
      <h3 className="text-center text-[18px] font-bold colorGreyDarker">
        Unique ID
      </h3>

      <div
        className={`bgWhite ${styles.uniqueIDContainer} h-[150px] flex justify-center items-center rounded-[10px] mt-[15px] p-[10px]`}
      >
        <p className="text-[36px] font-normal colorGreyDarker break-words">
          {uniqueID}
        </p>
      </div>

      <div className="mt-[30px] flex justify-end">
        <button
          onClick={() => {
            setFormStep(0);
            onModalClose(false);
          }}
          className="primaryBtn"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default function Signup({
  setActiveAuthPage,
  onModalClose,
}: SignupProps) {
  const [formStep, setFormStep] = useState(0);
  const [uniqueID, setUniqueID] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>();
  const onSubmit: SubmitHandler<SignupForm> = async (data) => {
    try {
      const response = await signUp(data);
      setFormStep(3);
      setUniqueID(response?.therapistID);
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <>
      <div
        className={`${
          formStep > 1 ? "w-[460px]" : "xl:w-[1196px] lg:w-[800px]"
        } ${formStep === 2 && "h-[500px]"} ${styles.authModalContent} bgWhite`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {(formStep === 0 || formStep === 1) && (
            <FormLayout
              formStep={formStep}
              setFormStep={setFormStep}
              register={register}
              watch={watch}
              setActiveAuthPage={setActiveAuthPage}
            />
          )}

          {formStep === 2 && (
            <Terms
              onModalClose={onModalClose}
              setActiveAuthPage={setActiveAuthPage}
              setFormStep={setFormStep}
            />
          )}
        </form>

        {formStep === 3 && (
          <UniqueID
            setFormStep={setFormStep}
            uniqueID={uniqueID}
            onModalClose={onModalClose}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
}
