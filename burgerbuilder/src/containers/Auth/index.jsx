import React, { Component } from 'react';
import classes from './style.module.css';
import Input from '../../components/UI/Forms/Inputs';
import Button from '../../components/UI/Button';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          label: 'Email',
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your Password',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    // console.log(this.state.orderForm);
    return isValid;
  }
  inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[controlName].validation,
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  render() {
    let formElements = [];
    for (let key in this.state.controls) {
      formElements.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    const form = formElements.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button btnType='Success'>Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
