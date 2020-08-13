/* eslint-disable react/no-deprecated */
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

    componentWillMount() {
      /*
       * setting interceptors in componentWillMount
       */
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          //
          this.setState({ error });
        },
      );
    }

    componentWillUnmount() {
      /*
       * Removing Old Interceptops to prevent memory leakege as well as the errors that might occur
       * Whenever component will be unmounted we remove the interceptors
       */

      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
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
