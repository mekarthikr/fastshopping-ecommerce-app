export function ValidateRegister(state) {
  const nameRegex = /^[a-zA-Z]{1,15}$/;
  const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#,@,$,%,!]).{8,}$/;
  const mobilenumberRegex = /^[6789]{1}[\d]{9}$/;

  const error = {
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    phonenumberError: "",
    passwordError: "",
    passwordConfirmError: "",
  };

  if (state.firstname === "") {
    error.firstnameError = "First Name field is required";
  } else if (!nameRegex.test(state.firstname)) {
    error.firstnameError = "Please provide a valid name";
  }

  if (state.lastname === "") {
    error.lastnameError = "Last Name field is required";
  } else if (!nameRegex.test(state.lastname)) {
    error.lastnameError = "Please provide a valid name";
  }

  if (state.email === "") {
    error.emailError = "Email field is required";
  } else if (!emailRegex.test(state.email)) {
    error.emailError = "Please provide a valid Email";
  }

  if (state.phonenumber === "") {
    error.phonenumberError = "Phone Number field is required";
  } else if (!mobilenumberRegex.test(state.phonenumber)) {
    error.phonenumberError = "Please provide a valid Mobile Number";
  }

  if (state.password === "") {
    error.passwordError = "Password field is required";
  } else if (!passwordRegex.test(state.password)) {
    error.passwordError = "Please provide a valid Password";
  }

  if (state.password != "") {
    console.log("true");
    if (state.confirmpassword != state.password) {
      error.passwordConfirmError = "Plesae enter correct Password";
    } else if (state.confirmpassword === "") {
      error.passwordConfirmError = "Confirm Password field is required";
    }
  } else {
    console.log("false");
  }
  if (
    error.firstnameError ||
    error.lastnameError ||
    error.emailError ||
    error.passwordError ||
    error.passwordConfirmError ||
    error.phonenumberError
  ) {
    console.log("ERROR", error);
    return error;
  }
  console.log("TRUE");
  return true;
}
