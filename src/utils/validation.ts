export const validatePhone = (phone: string): boolean => {
  return /^\d{10}$/.test(phone);
};

export const validateEmail = (email: string): boolean => {
  return email.includes('@');
};