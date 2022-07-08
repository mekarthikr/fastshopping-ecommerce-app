import React,{ Component } from "react";
import FormError from "./error";
import { validateInput } from "./validation";
  
 export  class Formvalidation extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        isInputValid: true,
        errorMessage: ''
        }
    }
    
    handleInput = event => {
      const { value } = event.target;
      this.setState({value});
    }  
    
    handleInputValidation = event => {
      const { isInputValid, errorMessage } = validateInput(this.state.value);
      this.setState({
        isInputValid: isInputValid,
        errorMessage: errorMessage
      })
      
    }
    
    render() {
      return(
        <div className="container">
          <h1>Form Validatiion</h1>
          <p>HTML Form Event: <strong>onBlur</strong></p>
          <input
                type="text"
                name="name"
                className="input-field"
                // placeholder="Số điện thoại"
                onChange={this.handleInput}
                onBlur={this.handleInputValidation}
                required />
         <FormError 
                isHidden={this.state.isInputValid} 
                errorMessage={this.state.errorMessage} />
        </div>
      )
    }
  }
  
//   ReactDOM.render(<App />, document.getElementById("root"));