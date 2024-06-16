/**
 *
 * AddMerchant
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddMerchant = props => {
  const {
    merchantFormData,
    formErrors,
    isSubmitting,
    submitTitle = 'Подтвердить',
    merchantChange,
    addMerchant
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addMerchant();
  };

  return (
    <div className='add-merchant'>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Имя'}
              name={'name'}
              placeholder={'Ваше полное имя'}
              value={merchantFormData.name}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['email']}
              label={'Email'}
              name={'email'}
              placeholder={'Ваш Email'}
              value={merchantFormData.email}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['phoneNumber']}
              label={'Номер телефона'}
              name={'phoneNumber'}
              placeholder={'Ваш номер телефона'}
              value={merchantFormData.phoneNumber}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['brandName']}
              label={'Бренд'}
              name={'brandName'}
              placeholder={'Ваш бренд'}
              value={merchantFormData.brand}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'textarea'}
              error={formErrors['business']}
              label={'Компания'}
              name={'business'}
              placeholder={'Опишите Вашу компанию'}
              value={merchantFormData.business}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-merchant-actions'>
          <Button type='submit' text={submitTitle} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default AddMerchant;
