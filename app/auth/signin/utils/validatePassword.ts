import { getPasswordStrength } from "./getPasswordStrength";

export const validatePassword = (value) => {
  const password = getPasswordStrength(value);
  if (password === 0) {
    return "كلمة المرور مطلوبة";
  }
  if (value.length === 1) {
    return "Password must be at least 8 characters long";
  }
  return true;
};
