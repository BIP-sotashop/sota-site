/**
 *
 * AddBrand
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';

const AddBrand = props => {
  const { brandFormData, formErrors, brandChange, addBrand } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addBrand();
  };

  return (
    <div className='add-brand'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Название'}
              name={'name'}
              placeholder={'Название бренда'}
              value={brandFormData.name}
              onInputChange={(name, value) => {
                brandChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Описание'}
              name={'description'}
              placeholder={'Описание бренда'}
              value={brandFormData.description}
              onInputChange={(name, value) => {
                brandChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='my-2'>
            <Switch
              id={'active-brand'}
              name={'isActive'}
              label={'Active?'}
              checked={brandFormData.isActive}
              toggleCheckboxChange={value => brandChange('isActive', value)}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-brand-actions'>
          <Button type='submit' text='Добавить бренд' />
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
