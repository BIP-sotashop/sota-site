/**
 *
 * CartIcon
 *
 */

import React from 'react';

import { BagIcon } from '../Icon';
import Button from '../Button';

const CartIcon = props => {
  const { className, onClick, cartItems } = props;

  const Icon = (
    <span className='cart-icon'>
      <BagIcon />
      {cartItems.length > 0 && (
        <span className='cart-badge'>
          {cartItems.length >= 99 ? '99+' : cartItems.length}
        </span>
      )}
    </span>
  );

  const items = cartItems.length;

  return (
    <Button
      borderless
      variant='empty'
      className={className}
      ariaLabel={
        items > 0 ? `В корзине ${items} вещей` : 'Корзина пуста'
      }
      icon={Icon}
      onClick={onClick}
    />
  );
};

export default CartIcon;
