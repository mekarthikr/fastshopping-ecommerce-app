export const validateInput = (checkingText) => {
      
    const regexp = /^\d{10,11}$/; 
    // regular expression - checking if phone number contains only 10 - 11 numbers
    
    if (regexp.exec(checkingText) !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
            };
        }
}