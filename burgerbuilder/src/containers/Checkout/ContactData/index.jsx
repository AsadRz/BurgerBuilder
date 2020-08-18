import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button';
import classes from './style.module.css';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Forms/Inputs';

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            label: 'Name',
            type: 'text',
            placeholder: 'Your Name',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        street: {
          elementType: 'input',
          elementConfig: {
            label: 'Street',
            type: 'text',
            placeholder: 'Street',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        zipCode: {
          elementType: 'input',
          elementConfig: {
            label: 'Zip Code',
            type: 'text',
            placeholder: 'ZIP Code',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        city: {
          elementType: 'input',
          elementConfig: {
            label: 'City',
            type: 'text',
            placeholder: 'City',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        country: {
          elementType: 'input',
          elementConfig: {
            label: 'Country',
            type: 'text',
            placeholder: 'Country',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
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
        delivery: {
          elementType: 'select',
          elementConfig: {
            options: [
              { value: 'fastest', displayValue: 'Fastest' },
              { value: 'slow', displayValue: 'Slowest' },
            ],
          },
          value: '',
        },
      },
      loading: false,
    };
  }

  orderHandler = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    let formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const orders = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
    };

    try {
      const res = await axios.post('/orders.json', orders);
      this.setState({ loading: false }, () => {
        console.log(res);
      });

      this.props.history.push('/');
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    // console.log(this.state.orderForm);
    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation,
    );
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    // Pushing OrderForm to FormElements Array
    //and looping it through to make dynamic input elements

    let formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType='Success'>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
