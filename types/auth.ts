export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  subscribeNewsletter: boolean;
}

export interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  agreeTerms?: string;
}

export interface TouchedFields {
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  name?: boolean;
  agreeTerms?: boolean;
}

export type PageState = "loading" | "form" | "success" | "expired" | "invalid";

export interface PasswordStrength {
  level: number;
  text: "Weak" | "Medium" | "Strong" | "";
  color: string;
}
