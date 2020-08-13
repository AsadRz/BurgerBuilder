import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button';
import classes from './style.module.css';
import Spinner from '../../../components/UI/Spinner';

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
      this.setState({ loading: false });

      this.props.history.push('/');
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your Email'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Your Street'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='Your Postal Code'
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
