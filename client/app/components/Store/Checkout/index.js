/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Продолжить покупки'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='Оформить заказ'
            onClick={() => placeOrder()}
          />
        ) : (
          <Button
            variant='primary'
            text='Перейти к оформлению'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
