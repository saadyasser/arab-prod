export const getPasswordStrength = (password = "") => {
  const lengthCriteria = password?.length >= 4; // الطول يجب أن يكون 4 على الأقل
  const strongLengthCriteria = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const validConditions = [
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSpecialChars,
  ].filter(Boolean).length;

  if (!lengthCriteria) return 0; // Low (no lines)

  if (lengthCriteria && validConditions >= 3 && !strongLengthCriteria) return 2; // Medium (2 lines)

  if (strongLengthCriteria && validConditions >= 4) return 4; // High (4 lines)

  if (strongLengthCriteria || validConditions >= 3) return 3; // High (3 lines)

  if (validConditions >= 1) return 1; // Low (1 line)

  return 0; // Default weak password
};
