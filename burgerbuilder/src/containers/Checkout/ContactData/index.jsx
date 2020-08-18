import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button';
import classes from './style.module.css';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Forms/Inputs';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const orders = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Asad Ullah Riaz',
        adress: {
          street: 'Test Street 123',
          zipCode: '46000',
          city: 'Islamabad',
          country: 'Pakistan',
        },
        phone: '12121221',
      },
      delivery: 'fastest',
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

  render() {
    let form = (
      <form>
        <Input
          inputType='input'
          type='text'
          name='name'
          placeholder='Your Name'
          label='Name'
        />
        <Input
          inputType='input'
          type='email'
          name='email'
          placeholder='Your Email'
          label='Email'
        />
        <Input
          inputType='input'
          type='text'
          name='street'
          placeholder='Your Street'
          label='Street'
        />
        <Input
          inputType='input'
          type='text'
          name='postal'
          placeholder='Your Postal Code'
          label='Postal Code'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
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
