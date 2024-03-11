export type SignupForm = {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: number;
  password: string;
  email: string;
  confirmPassword: string;
  institutionName: string;
  location: string;
  profession: string;
  managerName: string;
  managerID: string;
};

export type LoginForm = {
  emailId: string;
  password: string;
  phoneNumber: string;
  otp: string;
};
