/**
 *
 * Edit Address
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Checkbox from '../../Common/Checkbox';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const EditAddress = props => {
  const { address, addressChange, formErrors, updateAddress, deleteAddress } =
    props;

  const handleSubmit = event => {
    event.preventDefault();
    updateAddress();
  };

  return (
    <div className='edit-address'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Адрес'}
              name={'address'}
              placeholder={'Адрес: Улица, Дом/корпус, квартира'}
              value={address.address}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['city']}
              label={'Город'}
              name={'city'}
              placeholder={'Город'}
              value={address.city}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['state']}
              label={'Регион'}
              name={'state'}
              placeholder={'Регион'}
              value={address.state}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['country']}
              label={'Страна'}
              name={'country'}
              placeholder={'Введите свою страну'}
              value={address.country}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['zipCode']}
              label={'Почтовый индекс'}
              name={'zipCode'}
              placeholder={'Введите свой почтовый индекс'}
              value={address.zipCode}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Checkbox
              id={'default'}
              label={'Выбрать по умолчанию'}
              name={'isDefault'}
              checked={address.isDefault}
              onChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Сохранить'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Удалить'
            onClick={() => deleteAddress(address._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAddress;
