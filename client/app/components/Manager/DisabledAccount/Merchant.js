/*
 *
 * DisabledMerchantAccount
 *
 */

import React from 'react';

const DisabledMerchantAccount = props => {
  const { user } = props;

  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ minHeight: 250 }}
    >
      <h3 className='mb-3'>Hi, {user.firstName}</h3>
      <div className='p-4 rounded-sm bg-secondary'>
        <h5>Ваш аккаунт был отключен.</h5>
        <p className='text-gray mb-1'>
          Пожалуйста, свяжитесь с администратором .
        </p>
        <div className='mt-2'>
          <i className='fa fa-phone mr-2' />
          <span>Свяжитесь по телефону</span>
        </div>
      </div>
    </div>
  );
};

export default DisabledMerchantAccount;
