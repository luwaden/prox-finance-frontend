export interface ILogin {
  email: string;
  password: string;
}

export interface ISignupForm {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
  confirmPassword: string;
}

export interface ISignuptype {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
}

export interface ISignUp {
  onSubmit: (form: ISignuptype) => void;
}
