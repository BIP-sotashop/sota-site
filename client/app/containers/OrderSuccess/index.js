/*
 *
 * OrderSuccess
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class OrderSuccess extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchOrder(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      this.props.fetchOrder(id);
    }
  }

  render() {
    const { order, isLoading } = this.props;

    return (
      <div className='order-success'>
        {isLoading ? (
          <LoadingIndicator />
        ) : order._id ? (
          <div className='order-message'>
            <h2>Спасибо за ваш заказ.</h2>
            <p>
              Заказ{' '}
              <Link
                to={{
                  pathname: `/order/${order._id}?success`,
                  state: { prevPath: location.pathname }
                }}
                className='order-label'
              >
                #{order._id}
              </Link>{' '}
              завершен.
            </p>
            <p>Подтверждение заказа будет отправлено вам на email.</p>
            <div className='order-success-actions'>
              <Link to='/dashboard/orders' className='btn-link'>
                Управление заказами
              </Link>
              <Link to='/shop' className='btn-link shopping-btn'>
                Продолжить покупки
              </Link>
            </div>
          </div>
        ) : (
          <NotFound message='Заказ не найден.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order.order,
    isLoading: state.order.isLoading
  };
};

export default connect(mapStateToProps, actions)(OrderSuccess);
