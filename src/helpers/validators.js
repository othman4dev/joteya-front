export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    return { error: "Email is required" };
  }
  if (!re.test(email)) {
    return { error: "Invalid email" };
  }
};

export const validatePassword = (password) => {
  const easyPasswords = [
    "password",
    "qwertyui",
    "qwertyuiop",
    "asdfghjk",
    "asdfghjkl",
    "zxcvbnm",
    "qwerty123456",
    "password123",
    "password1234",
    "password12345",
    "password123456",
    "password1234567",
    "password12345678",
    "password123456789",
    "password1234567890",
    "pass1234",
    "qwer1234",
    "qwerty123456",
  ];
  if (password == "") {
    return { error: "Password is required" };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters long" };
  }
  if (/^\d+$/.test(password)) {
    return { error: "Password must contain at least one letter" };
  }
  if (easyPasswords.includes(password)) {
    return { error: "Password is too easy" };
  }
};

export const validateName = (name) => {
  if (name == "") {
    return { error: "Name is required" };
  }
  if (name.length < 3) {
    return { error: "Name must be at least 3 characters long" };
  }
  if (name.split(" ").length < 2 || name.split(" ")[1].length < 2) {
    return { error: "Name must contain at least two words" };
  }
};

export const validatePhone = (phone) => {
  const cleanedPhone = phone.replace(/\D/g, "");

  if (cleanedPhone === "") {
    return { error: "Phone is required" };
  }
  const re = /^\d+$/;
  if (!re.test(cleanedPhone)) {
    return { error: "Phone number must contain only digits" };
  }
  if (cleanedPhone.length < 10) {
    return { error: "Phone number must be at least 10 digits long" };
  }
};

export const confirmPassword = (password, confirmPassword) => {
  if (!password || !confirmPassword) {
    return { error: "Please enter both passwords" };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
};

export const validateCode = (code, length) => {
  if (code == "") {
    return { error: "Code is required" };
  }
  if (code.length !== length) {
    return { error: "Code must be " + length + " digits long" };
  }
  const numberRegex = /^[0-9]+$/;
  if (!numberRegex.test(code)) {
    return { error: "Code must contain only numbers" };
  }
};

export const validateTerms = (checkbox) => {
  if (!checkbox) {
    return { error: "You must agree to the terms and conditions" };
  }
};
