/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import Modal from '../../components/UI/Modal';
import Aux from '../Auxilliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
      this.errorConfirmedHandler = this.errorConfirmedHandler.bind(this);
    }

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          //   console.log(error);
          this.setState({ error });
        },
      );
    }

    errorConfirmedHandler() {
      this.setState({ error: null });
    }

    render() {
      const { error } = this.state;
      return (
        <Aux>
          <Modal show={error} modalClosed={this.errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
