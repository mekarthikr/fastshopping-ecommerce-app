export function ValidateLogin(state) {
  const emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;

  const error = {
    emailError: "",
    passwordError: "",
  };
  if (state.email === "") {
    error.emailError = "Email field is required";
  } else if (!emailRegex.test(state.email)) {
    error.emailError = "Please provide a valid Email";
  }
  if (state.password === "") {
    error.passwordError = "Password field is required";
  }
  if (error.emailError || error.passwordError) {
    console.log("error", error);
    return error;
  }
  return true;
}
